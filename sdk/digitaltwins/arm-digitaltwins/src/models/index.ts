/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export type DigitalTwinsEndpointResourcePropertiesUnion =
  | DigitalTwinsEndpointResourceProperties
  | ServiceBus
  | EventHub
  | EventGrid;

/** The private endpoint connection of a Digital Twin. */
export interface PrivateEndpointConnection {
  /**
   * The resource identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  properties: PrivateEndpointConnectionProperties;
}

/** The properties of a private endpoint connection. */
export interface ConnectionProperties {
  /**
   * The provisioning state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ConnectionPropertiesProvisioningState;
  privateEndpoint?: ConnectionPropertiesPrivateEndpoint;
  /** The list of group ids for the private endpoint connection. */
  groupIds?: string[];
  privateLinkServiceConnectionState?: ConnectionPropertiesPrivateLinkServiceConnectionState;
}

/** The private endpoint property of a private endpoint connection. */
export interface PrivateEndpoint {
  /**
   * The resource identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
}

/** The current state of a private endpoint connection. */
export interface ConnectionState {
  /** The status of a private endpoint connection. */
  status: PrivateLinkServiceConnectionStatus;
  /** The description for the current state of a private endpoint connection. */
  description: string;
  /** Actions required for a private endpoint connection. */
  actionsRequired?: string;
}

/** The common properties of a DigitalTwinsInstance. */
export interface DigitalTwinsResource {
  /**
   * The resource identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** The resource location. */
  location: string;
  /** The resource tags. */
  tags?: { [propertyName: string]: string };
  /** The managed identity for the DigitalTwinsInstance. */
  identity?: DigitalTwinsIdentity;
}

/** The managed identity for the DigitalTwinsInstance. */
export interface DigitalTwinsIdentity {
  /** The type of Managed Identity used by the DigitalTwinsInstance. Only SystemAssigned is supported. */
  type?: DigitalTwinsIdentityType;
  /**
   * The object id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-identity-principal-id header in the PUT request if the resource has a systemAssigned(implicit) identity
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The tenant id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-client-tenant-id header in the PUT request if the resource has a systemAssigned(implicit) identity
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
}

/** Error response. */
export interface ErrorResponse {
  /** Error description */
  error?: ErrorDefinition;
}

/** Error definition. */
export interface ErrorDefinition {
  /**
   * Service specific error code which serves as the substatus for the HTTP error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * Description of the error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * Internal error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDefinition[];
}

/** The description of the DigitalTwins service. */
export interface DigitalTwinsPatchDescription {
  /** Instance patch properties */
  tags?: { [propertyName: string]: string };
  /** The managed identity for the DigitalTwinsInstance. */
  identity?: DigitalTwinsIdentity;
  /** Properties for the DigitalTwinsInstance. */
  properties?: DigitalTwinsPatchProperties;
}

/** The properties of a DigitalTwinsInstance. */
export interface DigitalTwinsPatchProperties {
  /** Public network access for the DigitalTwinsInstance. */
  publicNetworkAccess?: PublicNetworkAccess;
}

/** A list of DigitalTwinsInstance Endpoints with a next link. */
export interface DigitalTwinsEndpointResourceListResult {
  /** The link used to get the next page of DigitalTwinsInstance Endpoints. */
  nextLink?: string;
  /** A list of DigitalTwinsInstance Endpoints. */
  value?: DigitalTwinsEndpointResource[];
}

/** Properties related to Digital Twins Endpoint */
export interface DigitalTwinsEndpointResourceProperties {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  endpointType: "ServiceBus" | "EventHub" | "EventGrid";
  /**
   * The provisioning state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: EndpointProvisioningState;
  /**
   * Time when the Endpoint was added to DigitalTwinsInstance.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdTime?: Date;
  /** Specifies the authentication type being used for connecting to the endpoint. */
  authenticationType?: AuthenticationType;
  /** Dead letter storage secret for key-based authentication. Will be obfuscated during read. */
  deadLetterSecret?: string;
  /** Dead letter storage URL for identity-based authentication. */
  deadLetterUri?: string;
}

/** Definition of a resource. */
export interface ExternalResource {
  /**
   * The resource identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Extension resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** A list of DigitalTwins description objects with a next link. */
export interface DigitalTwinsDescriptionListResult {
  /** The link used to get the next page of DigitalTwins description objects. */
  nextLink?: string;
  /** A list of DigitalTwins description objects. */
  value?: DigitalTwinsDescription[];
}

/** A list of DigitalTwins service operations. It contains a list of operations and a URL link to get the next set of results. */
export interface OperationListResult {
  /** The link used to get the next page of DigitalTwins description objects. */
  nextLink?: string;
  /**
   * A list of DigitalTwins operations supported by the Microsoft.DigitalTwins resource provider.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
}

/** DigitalTwins service REST API operation */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{read | write | action | delete}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /** Operation properties display */
  display?: OperationDisplay;
  /**
   * The intended executor of the operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly origin?: string;
  /**
   * If the operation is a data action (for data plane rbac).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isDataAction?: boolean;
}

/** The object that represents the operation. */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft DigitalTwins
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * Resource Type: DigitalTwinsInstances
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * Name of the operation
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * Friendly description for the operation,
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

/** The result returned from a database check name availability request. */
export interface CheckNameRequest {
  /** Resource name. */
  name: string;
  /** The type of resource, for instance Microsoft.DigitalTwins/digitalTwinsInstances. */
  type: "Microsoft.DigitalTwins/digitalTwinsInstances";
}

/** The result returned from a check name availability request. */
export interface CheckNameResult {
  /** Specifies a Boolean value that indicates if the name is available. */
  nameAvailable?: boolean;
  /** Message indicating an unavailable name due to a conflict, or a description of the naming rules that are violated. */
  message?: string;
  /** Message providing the reason why the given name is invalid. */
  reason?: Reason;
}

/** The available private link resources for a Digital Twin. */
export interface GroupIdInformationResponse {
  /** The list of available private link resources for a Digital Twin. */
  value?: GroupIdInformation[];
}

/** The group information for creating a private endpoint on Digital Twin. */
export interface GroupIdInformation {
  properties: GroupIdInformationProperties;
  /** The resource identifier. */
  id?: string;
  /**
   * The resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** The properties for a group information object. */
export interface GroupIdInformationPropertiesAutoGenerated {
  /** The group id */
  groupId?: string;
  /** The required members for a specific group id. */
  requiredMembers?: string[];
  /** The required DNS zones for a specific group id. */
  requiredZoneNames?: string[];
}

/** The available private link connections for a Digital Twin. */
export interface PrivateEndpointConnectionsResponse {
  /** The list of available private link connections for a Digital Twin. */
  value?: PrivateEndpointConnection[];
}

export type PrivateEndpointConnectionProperties = ConnectionProperties & {};

export type ConnectionPropertiesPrivateEndpoint = PrivateEndpoint & {};

export type ConnectionPropertiesPrivateLinkServiceConnectionState = ConnectionState & {};

/** The description of the DigitalTwins service. */
export type DigitalTwinsDescription = DigitalTwinsResource & {
  /**
   * Time when DigitalTwinsInstance was created.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdTime?: Date;
  /**
   * Time when DigitalTwinsInstance was updated.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastUpdatedTime?: Date;
  /**
   * The provisioning state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * Api endpoint to work with DigitalTwinsInstance.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly hostName?: string;
  privateEndpointConnections?: PrivateEndpointConnection[];
  /** Public network access for the DigitalTwinsInstance. */
  publicNetworkAccess?: PublicNetworkAccess;
};

/** Properties related to ServiceBus. */
export type ServiceBus = DigitalTwinsEndpointResourceProperties & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  endpointType: "ServiceBus";
  /** PrimaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read. */
  primaryConnectionString?: string;
  /** SecondaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read. */
  secondaryConnectionString?: string;
  /** The URL of the ServiceBus namespace for identity-based authentication. It must include the protocol sb:// */
  endpointUri?: string;
  /** The ServiceBus Topic name for identity-based authentication */
  entityPath?: string;
};

/** Properties related to EventHub. */
export type EventHub = DigitalTwinsEndpointResourceProperties & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  endpointType: "EventHub";
  /** PrimaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read. */
  connectionStringPrimaryKey?: string;
  /** SecondaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read. */
  connectionStringSecondaryKey?: string;
  /** The URL of the EventHub namespace for identity-based authentication. It must include the protocol sb:// */
  endpointUri?: string;
  /** The EventHub name in the EventHub namespace for identity-based authentication. */
  entityPath?: string;
};

/** Properties related to EventGrid. */
export type EventGrid = DigitalTwinsEndpointResourceProperties & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  endpointType: "EventGrid";
  /** EventGrid Topic Endpoint */
  topicEndpoint: string;
  /** EventGrid secondary accesskey. Will be obfuscated during read. */
  accessKey1: string | null;
  /** EventGrid secondary accesskey. Will be obfuscated during read. */
  accessKey2?: string;
};

/** DigitalTwinsInstance endpoint resource. */
export type DigitalTwinsEndpointResource = ExternalResource & {
  /** DigitalTwinsInstance endpoint resource properties. */
  properties: DigitalTwinsEndpointResourcePropertiesUnion;
};

export type GroupIdInformationProperties = GroupIdInformationPropertiesAutoGenerated & {};

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  Provisioning = "Provisioning",
  Deleting = "Deleting",
  Updating = "Updating",
  Succeeded = "Succeeded",
  Failed = "Failed",
  Canceled = "Canceled",
  Deleted = "Deleted",
  Warning = "Warning",
  Suspending = "Suspending",
  Restoring = "Restoring",
  Moving = "Moving"
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Provisioning** \
 * **Deleting** \
 * **Updating** \
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **Deleted** \
 * **Warning** \
 * **Suspending** \
 * **Restoring** \
 * **Moving**
 */
export type ProvisioningState = string;

/** Known values of {@link ConnectionPropertiesProvisioningState} that the service accepts. */
export enum KnownConnectionPropertiesProvisioningState {
  Pending = "Pending",
  Approved = "Approved",
  Rejected = "Rejected",
  Disconnected = "Disconnected"
}

/**
 * Defines values for ConnectionPropertiesProvisioningState. \
 * {@link KnownConnectionPropertiesProvisioningState} can be used interchangeably with ConnectionPropertiesProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending** \
 * **Approved** \
 * **Rejected** \
 * **Disconnected**
 */
export type ConnectionPropertiesProvisioningState = string;

/** Known values of {@link PrivateLinkServiceConnectionStatus} that the service accepts. */
export enum KnownPrivateLinkServiceConnectionStatus {
  Pending = "Pending",
  Approved = "Approved",
  Rejected = "Rejected",
  Disconnected = "Disconnected"
}

/**
 * Defines values for PrivateLinkServiceConnectionStatus. \
 * {@link KnownPrivateLinkServiceConnectionStatus} can be used interchangeably with PrivateLinkServiceConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending** \
 * **Approved** \
 * **Rejected** \
 * **Disconnected**
 */
export type PrivateLinkServiceConnectionStatus = string;

/** Known values of {@link PublicNetworkAccess} that the service accepts. */
export enum KnownPublicNetworkAccess {
  Enabled = "Enabled",
  Disabled = "Disabled"
}

/**
 * Defines values for PublicNetworkAccess. \
 * {@link KnownPublicNetworkAccess} can be used interchangeably with PublicNetworkAccess,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type PublicNetworkAccess = string;

/** Known values of {@link DigitalTwinsIdentityType} that the service accepts. */
export enum KnownDigitalTwinsIdentityType {
  None = "None",
  SystemAssigned = "SystemAssigned"
}

/**
 * Defines values for DigitalTwinsIdentityType. \
 * {@link KnownDigitalTwinsIdentityType} can be used interchangeably with DigitalTwinsIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **SystemAssigned**
 */
export type DigitalTwinsIdentityType = string;

/** Known values of {@link EndpointType} that the service accepts. */
export enum KnownEndpointType {
  EventHub = "EventHub",
  EventGrid = "EventGrid",
  ServiceBus = "ServiceBus"
}

/**
 * Defines values for EndpointType. \
 * {@link KnownEndpointType} can be used interchangeably with EndpointType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **EventHub** \
 * **EventGrid** \
 * **ServiceBus**
 */
export type EndpointType = string;

/** Known values of {@link EndpointProvisioningState} that the service accepts. */
export enum KnownEndpointProvisioningState {
  Provisioning = "Provisioning",
  Deleting = "Deleting",
  Succeeded = "Succeeded",
  Failed = "Failed",
  Canceled = "Canceled",
  Deleted = "Deleted",
  Warning = "Warning",
  Suspending = "Suspending",
  Restoring = "Restoring",
  Moving = "Moving",
  Disabled = "Disabled"
}

/**
 * Defines values for EndpointProvisioningState. \
 * {@link KnownEndpointProvisioningState} can be used interchangeably with EndpointProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Provisioning** \
 * **Deleting** \
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **Deleted** \
 * **Warning** \
 * **Suspending** \
 * **Restoring** \
 * **Moving** \
 * **Disabled**
 */
export type EndpointProvisioningState = string;

/** Known values of {@link AuthenticationType} that the service accepts. */
export enum KnownAuthenticationType {
  KeyBased = "KeyBased",
  IdentityBased = "IdentityBased"
}

/**
 * Defines values for AuthenticationType. \
 * {@link KnownAuthenticationType} can be used interchangeably with AuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **KeyBased** \
 * **IdentityBased**
 */
export type AuthenticationType = string;

/** Known values of {@link Reason} that the service accepts. */
export enum KnownReason {
  Invalid = "Invalid",
  AlreadyExists = "AlreadyExists"
}

/**
 * Defines values for Reason. \
 * {@link KnownReason} can be used interchangeably with Reason,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Invalid** \
 * **AlreadyExists**
 */
export type Reason = string;

/** Optional parameters. */
export interface DigitalTwinsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type DigitalTwinsGetResponse = DigitalTwinsDescription;

/** Optional parameters. */
export interface DigitalTwinsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type DigitalTwinsCreateOrUpdateResponse = DigitalTwinsDescription;

/** Optional parameters. */
export interface DigitalTwinsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type DigitalTwinsUpdateResponse = DigitalTwinsDescription;

/** Optional parameters. */
export interface DigitalTwinsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the delete operation. */
export type DigitalTwinsDeleteResponse = DigitalTwinsDescription;

/** Optional parameters. */
export interface DigitalTwinsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type DigitalTwinsListResponse = DigitalTwinsDescriptionListResult;

/** Optional parameters. */
export interface DigitalTwinsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type DigitalTwinsListByResourceGroupResponse = DigitalTwinsDescriptionListResult;

/** Optional parameters. */
export interface DigitalTwinsCheckNameAvailabilityOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the checkNameAvailability operation. */
export type DigitalTwinsCheckNameAvailabilityResponse = CheckNameResult;

/** Optional parameters. */
export interface DigitalTwinsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type DigitalTwinsListNextResponse = DigitalTwinsDescriptionListResult;

/** Optional parameters. */
export interface DigitalTwinsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type DigitalTwinsListByResourceGroupNextResponse = DigitalTwinsDescriptionListResult;

/** Optional parameters. */
export interface DigitalTwinsEndpointListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type DigitalTwinsEndpointListResponse = DigitalTwinsEndpointResourceListResult;

/** Optional parameters. */
export interface DigitalTwinsEndpointGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type DigitalTwinsEndpointGetResponse = DigitalTwinsEndpointResource;

/** Optional parameters. */
export interface DigitalTwinsEndpointCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type DigitalTwinsEndpointCreateOrUpdateResponse = DigitalTwinsEndpointResource;

/** Optional parameters. */
export interface DigitalTwinsEndpointDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the delete operation. */
export type DigitalTwinsEndpointDeleteResponse = DigitalTwinsEndpointResource;

/** Optional parameters. */
export interface DigitalTwinsEndpointListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type DigitalTwinsEndpointListNextResponse = DigitalTwinsEndpointResourceListResult;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export interface PrivateLinkResourcesListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type PrivateLinkResourcesListResponse = GroupIdInformationResponse;

/** Optional parameters. */
export interface PrivateLinkResourcesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PrivateLinkResourcesGetResponse = GroupIdInformation;

/** Optional parameters. */
export interface PrivateEndpointConnectionsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type PrivateEndpointConnectionsListResponse = PrivateEndpointConnectionsResponse;

/** Optional parameters. */
export interface PrivateEndpointConnectionsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnection;

/** Optional parameters. */
export interface PrivateEndpointConnectionsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface PrivateEndpointConnectionsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type PrivateEndpointConnectionsCreateOrUpdateResponse = PrivateEndpointConnection;

/** Optional parameters. */
export interface AzureDigitalTwinsManagementClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
