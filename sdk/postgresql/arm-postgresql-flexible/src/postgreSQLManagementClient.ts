/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import { TokenCredential } from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { PostgreSQLManagementClientContext } from "./postgreSQLManagementClientContext";


class PostgreSQLManagementClient extends PostgreSQLManagementClientContext {
  // Operation groups
  servers: operations.Servers;
  firewallRules: operations.FirewallRules;
  configurations: operations.Configurations;
  checkNameAvailability: operations.CheckNameAvailability;
  locationBasedCapabilities: operations.LocationBasedCapabilities;
  virtualNetworkSubnetUsage: operations.VirtualNetworkSubnetUsage;
  operations: operations.Operations;
  databases: operations.Databases;
  getPrivateDnsZoneSuffix: operations.GetPrivateDnsZoneSuffix;

  /**
   * Initializes a new instance of the PostgreSQLManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string, options?: Models.PostgreSQLManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.servers = new operations.Servers(this);
    this.firewallRules = new operations.FirewallRules(this);
    this.configurations = new operations.Configurations(this);
    this.checkNameAvailability = new operations.CheckNameAvailability(this);
    this.locationBasedCapabilities = new operations.LocationBasedCapabilities(this);
    this.virtualNetworkSubnetUsage = new operations.VirtualNetworkSubnetUsage(this);
    this.operations = new operations.Operations(this);
    this.databases = new operations.Databases(this);
    this.getPrivateDnsZoneSuffix = new operations.GetPrivateDnsZoneSuffix(this);
  }
}

// Operation Specifications

export {
  PostgreSQLManagementClient,
  PostgreSQLManagementClientContext,
  Models as PostgreSQLManagementModels,
  Mappers as PostgreSQLManagementMappers
};
export * from "./operations";