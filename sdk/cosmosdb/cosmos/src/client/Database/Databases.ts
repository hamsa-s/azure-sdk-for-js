// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { ClientContext } from "../../ClientContext";
import { Constants, isResourceValid, ResourceType, StatusCodes } from "../../common";
import { CosmosClient } from "../../CosmosClient";
import { FetchFunctionCallback, mergeHeaders, SqlQuerySpec } from "../../queryExecutionContext";
import { QueryIterator } from "../../queryIterator";
import { FeedOptions, RequestOptions } from "../../request";
import { Resource } from "../Resource";
import { Database } from "./Database";
import { DatabaseDefinition } from "./DatabaseDefinition";
import { DatabaseRequest } from "./DatabaseRequest";
import { DatabaseResponse } from "./DatabaseResponse";
import { validateOffer } from "../../utils/offers";

/**
 * Operations for creating new databases, and reading/querying all databases
 *
 * @see {@link Database} for reading or deleting an existing database; use `client.database(id)`.
 *
 * Note: all these operations make calls against a fixed budget.
 * You should design your system such that these calls scale sublinearly with your application.
 * For instance, do not call `databases.readAll()` before every single `item.read()` call, to ensure the database exists;
 * do this once on application start up.
 */
export class Databases {
  /**
   * @hidden
   * @param client - The parent {@link CosmosClient} for the Database.
   */
  constructor(
    public readonly client: CosmosClient,
    private readonly clientContext: ClientContext
  ) {}

  /**
   * Queries all databases.
   * @param query - Query configuration for the operation. See {@link SqlQuerySpec} for more info on how to configure a query.
   * @param options - Use to set options like response page size, continuation tokens, etc.
   * @returns {@link QueryIterator} Allows you to return all databases in an array or iterate over them one at a time.
   * @example Read all databases to array.
   * ```typescript
   * const querySpec: SqlQuerySpec = {
   *   query: "SELECT * FROM root r WHERE r.id = @db",
   *   parameters: [
   *     {name: "@db", value: "Todo"}
   *   ]
   * };
   * const {body: databaseList} = await client.databases.query(querySpec).fetchAll();
   * ```
   */
  public query(query: string | SqlQuerySpec, options?: FeedOptions): QueryIterator<any>;
  /**
   * Queries all databases.
   * @param query - Query configuration for the operation. See {@link SqlQuerySpec} for more info on how to configure a query.
   * @param options - Use to set options like response page size, continuation tokens, etc.
   * @returns {@link QueryIterator} Allows you to return all databases in an array or iterate over them one at a time.
   * @example Read all databases to array.
   * ```typescript
   * const querySpec: SqlQuerySpec = {
   *   query: "SELECT * FROM root r WHERE r.id = @db",
   *   parameters: [
   *     {name: "@db", value: "Todo"}
   *   ]
   * };
   * const {body: databaseList} = await client.databases.query(querySpec).fetchAll();
   * ```
   */
  public query<T>(query: string | SqlQuerySpec, options?: FeedOptions): QueryIterator<T>;
  public query<T>(query: string | SqlQuerySpec, options?: FeedOptions): QueryIterator<T> {
    const cb: FetchFunctionCallback = (innerOptions) => {
      return this.clientContext.queryFeed({
        path: "/dbs",
        resourceType: ResourceType.database,
        resourceId: "",
        resultFn: (result) => result.Databases,
        query,
        options: innerOptions,
      });
    };
    return new QueryIterator(this.clientContext, query, options, cb);
  }

  /**
   * Send a request for creating a database.
   *
   * A database manages users, permissions and a set of containers.
   * Each Azure Cosmos DB Database Account is able to support multiple independent named databases,
   * with the database being the logical container for data.
   *
   * Each Database consists of one or more containers, each of which in turn contain one or more
   * documents. Since databases are an administrative resource, the Service Master Key will be
   * required in order to access and successfully complete any action using the User APIs.
   *
   * @param body - The {@link DatabaseDefinition} that represents the {@link Database} to be created.
   * @param options - Use to set options like response page size, continuation tokens, etc.
   */
  public async create(
    body: DatabaseRequest,
    options: RequestOptions = {}
  ): Promise<DatabaseResponse> {
    const err = {};
    if (!isResourceValid(body, err)) {
      throw err;
    }

    validateOffer(body);

    if (body.maxThroughput) {
      const autoscaleParams: {
        maxThroughput: number;
        autoUpgradePolicy?: {
          throughputPolicy: {
            incrementPercent: number;
          };
        };
      } = {
        maxThroughput: body.maxThroughput,
      };
      if (body.autoUpgradePolicy) {
        autoscaleParams.autoUpgradePolicy = body.autoUpgradePolicy;
      }
      const autoscaleHeaders = JSON.stringify(autoscaleParams);
      options.initialHeaders = Object.assign({}, options.initialHeaders, {
        [Constants.HttpHeaders.AutoscaleSettings]: autoscaleHeaders,
      });
      delete body.maxThroughput;
      delete body.autoUpgradePolicy;
    }

    if (body.throughput) {
      options.initialHeaders = Object.assign({}, options.initialHeaders, {
        [Constants.HttpHeaders.OfferThroughput]: body.throughput,
      });
      delete body.throughput;
    }

    const path = "/dbs"; // TODO: constant
    const response = await this.clientContext.create<DatabaseRequest>({
      body,
      path,
      resourceType: ResourceType.database,
      resourceId: undefined,
      options,
    });
    const ref = new Database(this.client, body.id, this.clientContext);
    return new DatabaseResponse(response.result, response.headers, response.code, ref);
  }

  /**
   * Check if a database exists, and if it doesn't, create it.
   * This will make a read operation based on the id in the `body`, then if it is not found, a create operation.
   *
   * A database manages users, permissions and a set of containers.
   * Each Azure Cosmos DB Database Account is able to support multiple independent named databases,
   * with the database being the logical container for data.
   *
   * Each Database consists of one or more containers, each of which in turn contain one or more
   * documents. Since databases are an an administrative resource, the Service Master Key will be
   * required in order to access and successfully complete any action using the User APIs.
   *
   * @param body - The {@link DatabaseDefinition} that represents the {@link Database} to be created.
   * @param options - Additional options for the request
   */
  public async createIfNotExists(
    body: DatabaseRequest,
    options?: RequestOptions
  ): Promise<DatabaseResponse> {
    if (!body || body.id === null || body.id === undefined) {
      throw new Error("body parameter must be an object with an id property");
    }
    /*
      1. Attempt to read the Database (based on an assumption that most databases will already exist, so its faster)
      2. If it fails with NotFound error, attempt to create the db. Else, return the read results.
    */
    try {
      const readResponse = await this.client.database(body.id).read(options);
      return readResponse;
    } catch (err) {
      if (err.code === StatusCodes.NotFound) {
        const createResponse = await this.create(body, options);
        // Must merge the headers to capture RU costskaty
        mergeHeaders(createResponse.headers, err.headers);
        return createResponse;
      } else {
        throw err;
      }
    }
  }

  // TODO: DatabaseResponse for QueryIterator?
  /**
   * Reads all databases.
   * @param options - Use to set options like response page size, continuation tokens, etc.
   * @returns {@link QueryIterator} Allows you to return all databases in an array or iterate over them one at a time.
   * @example Read all databases to array.
   * ```typescript
   * const {body: databaseList} = await client.databases.readAll().fetchAll();
   * ```
   */
  public readAll(options?: FeedOptions): QueryIterator<DatabaseDefinition & Resource> {
    return this.query<DatabaseDefinition & Resource>(undefined, options);
  }
}
