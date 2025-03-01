/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  PrivateEndpointConnection,
  SignalRPrivateEndpointConnectionsListOptionalParams,
  SignalRPrivateEndpointConnectionsGetOptionalParams,
  SignalRPrivateEndpointConnectionsGetResponse,
  SignalRPrivateEndpointConnectionsUpdateOptionalParams,
  SignalRPrivateEndpointConnectionsUpdateResponse,
  SignalRPrivateEndpointConnectionsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SignalRPrivateEndpointConnections. */
export interface SignalRPrivateEndpointConnections {
  /**
   * List private endpoint connections
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    options?: SignalRPrivateEndpointConnectionsListOptionalParams
  ): PagedAsyncIterableIterator<PrivateEndpointConnection>;
  /**
   * Get the specified private endpoint connection
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  get(
    privateEndpointConnectionName: string,
    resourceGroupName: string,
    resourceName: string,
    options?: SignalRPrivateEndpointConnectionsGetOptionalParams
  ): Promise<SignalRPrivateEndpointConnectionsGetResponse>;
  /**
   * Update the state of specified private endpoint connection
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param parameters The resource of private endpoint and its properties
   * @param options The options parameters.
   */
  update(
    privateEndpointConnectionName: string,
    resourceGroupName: string,
    resourceName: string,
    parameters: PrivateEndpointConnection,
    options?: SignalRPrivateEndpointConnectionsUpdateOptionalParams
  ): Promise<SignalRPrivateEndpointConnectionsUpdateResponse>;
  /**
   * Delete the specified private endpoint connection
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  beginDelete(
    privateEndpointConnectionName: string,
    resourceGroupName: string,
    resourceName: string,
    options?: SignalRPrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete the specified private endpoint connection
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    privateEndpointConnectionName: string,
    resourceGroupName: string,
    resourceName: string,
    options?: SignalRPrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<void>;
}
