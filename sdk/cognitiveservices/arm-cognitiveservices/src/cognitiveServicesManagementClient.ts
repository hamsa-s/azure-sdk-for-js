/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import {
  AccountsImpl,
  DeletedAccountsImpl,
  ResourceSkusImpl,
  OperationsImpl,
  CommitmentTiersImpl,
  PrivateEndpointConnectionsImpl,
  PrivateLinkResourcesImpl,
  DeploymentsImpl,
  CommitmentPlansImpl
} from "./operations";
import {
  Accounts,
  DeletedAccounts,
  ResourceSkus,
  Operations,
  CommitmentTiers,
  PrivateEndpointConnections,
  PrivateLinkResources,
  Deployments,
  CommitmentPlans
} from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  CognitiveServicesManagementClientOptionalParams,
  CheckSkuAvailabilityOptionalParams,
  CheckSkuAvailabilityResponse,
  CheckDomainAvailabilityOptionalParams,
  CheckDomainAvailabilityResponse
} from "./models";

export class CognitiveServicesManagementClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the CognitiveServicesManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: CognitiveServicesManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: CognitiveServicesManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-cognitiveservices/7.0.0`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-10-01";
    this.accounts = new AccountsImpl(this);
    this.deletedAccounts = new DeletedAccountsImpl(this);
    this.resourceSkus = new ResourceSkusImpl(this);
    this.operations = new OperationsImpl(this);
    this.commitmentTiers = new CommitmentTiersImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.deployments = new DeploymentsImpl(this);
    this.commitmentPlans = new CommitmentPlansImpl(this);
  }

  /**
   * Check available SKUs.
   * @param location Resource location.
   * @param skus The SKU of the resource.
   * @param kind The Kind of the resource.
   * @param typeParam The Type of the resource.
   * @param options The options parameters.
   */
  checkSkuAvailability(
    location: string,
    skus: string[],
    kind: string,
    typeParam: string,
    options?: CheckSkuAvailabilityOptionalParams
  ): Promise<CheckSkuAvailabilityResponse> {
    return this.sendOperationRequest(
      { location, skus, kind, typeParam, options },
      checkSkuAvailabilityOperationSpec
    );
  }

  /**
   * Check whether a domain is available.
   * @param subdomainName The subdomain name to use.
   * @param typeParam The Type of the resource.
   * @param options The options parameters.
   */
  checkDomainAvailability(
    subdomainName: string,
    typeParam: string,
    options?: CheckDomainAvailabilityOptionalParams
  ): Promise<CheckDomainAvailabilityResponse> {
    return this.sendOperationRequest(
      { subdomainName, typeParam, options },
      checkDomainAvailabilityOperationSpec
    );
  }

  accounts: Accounts;
  deletedAccounts: DeletedAccounts;
  resourceSkus: ResourceSkus;
  operations: Operations;
  commitmentTiers: CommitmentTiers;
  privateEndpointConnections: PrivateEndpointConnections;
  privateLinkResources: PrivateLinkResources;
  deployments: Deployments;
  commitmentPlans: CommitmentPlans;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkSkuAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/checkSkuAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SkuAvailabilityListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: {
    parameterPath: { skus: ["skus"], kind: ["kind"], typeParam: ["typeParam"] },
    mapper: { ...Mappers.CheckSkuAvailabilityParameter, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const checkDomainAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/checkDomainAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DomainAvailability
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: {
    parameterPath: {
      subdomainName: ["subdomainName"],
      typeParam: ["typeParam"],
      kind: ["options", "kind"]
    },
    mapper: { ...Mappers.CheckDomainAvailabilityParameter, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
