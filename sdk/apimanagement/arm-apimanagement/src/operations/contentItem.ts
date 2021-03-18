/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/contentItemMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a ContentItem. */
export class ContentItem {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a ContentItem.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns list of content items
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentItemListByServiceResponse>
   */
  listByService(resourceGroupName: string, serviceName: string, contentTypeId: string, options?: msRest.RequestOptionsBase): Promise<Models.ContentItemListByServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, contentTypeId: string, callback: msRest.ServiceCallback<Models.ContentItemCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, contentTypeId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ContentItemCollection>): void;
  listByService(resourceGroupName: string, serviceName: string, contentTypeId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ContentItemCollection>, callback?: msRest.ServiceCallback<Models.ContentItemCollection>): Promise<Models.ContentItemListByServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        contentTypeId,
        options
      },
      listByServiceOperationSpec,
      callback) as Promise<Models.ContentItemListByServiceResponse>;
  }

  /**
   * Returns content item metadata
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentItemGetEntityTagResponse>
   */
  getEntityTag(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, options?: msRest.RequestOptionsBase): Promise<Models.ContentItemGetEntityTagResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param options The optional parameters
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getEntityTag(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.ContentItemGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        contentTypeId,
        contentItemId,
        options
      },
      getEntityTagOperationSpec,
      callback) as Promise<Models.ContentItemGetEntityTagResponse>;
  }

  /**
   * Returns content item details
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentItemGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, options?: msRest.RequestOptionsBase): Promise<Models.ContentItemGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, callback: msRest.ServiceCallback<Models.ContentItemContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ContentItemContract>): void;
  get(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ContentItemContract>, callback?: msRest.ServiceCallback<Models.ContentItemContract>): Promise<Models.ContentItemGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        contentTypeId,
        contentItemId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ContentItemGetResponse>;
  }

  /**
   * Creates new content item
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentItemCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, options?: Models.ContentItemCreateOrUpdateOptionalParams): Promise<Models.ContentItemCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, callback: msRest.ServiceCallback<Models.ContentItemContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, options: Models.ContentItemCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.ContentItemContract>): void;
  createOrUpdate(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, options?: Models.ContentItemCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.ContentItemContract>, callback?: msRest.ServiceCallback<Models.ContentItemContract>): Promise<Models.ContentItemCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        contentTypeId,
        contentItemId,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ContentItemCreateOrUpdateResponse>;
  }

  /**
   * Removes specified content item.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, ifMatch: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, ifMatch: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, ifMatch: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, ifMatch: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        contentTypeId,
        contentItemId,
        ifMatch,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Returns list of content items
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentItemListByServiceNextResponse>
   */
  listByServiceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ContentItemListByServiceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ContentItemCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ContentItemCollection>): void;
  listByServiceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ContentItemCollection>, callback?: msRest.ServiceCallback<Models.ContentItemCollection>): Promise<Models.ContentItemListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServiceNextOperationSpec,
      callback) as Promise<Models.ContentItemListByServiceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByServiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/contentTypes/{contentTypeId}/contentItems",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.contentTypeId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ContentItemCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getEntityTagOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/contentTypes/{contentTypeId}/contentItems/{contentItemId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.contentTypeId,
    Parameters.contentItemId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.ContentItemGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ContentItemGetEntityTagHeaders
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/contentTypes/{contentTypeId}/contentItems/{contentItemId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.contentTypeId,
    Parameters.contentItemId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ContentItemContract,
      headersMapper: Mappers.ContentItemGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ContentItemGetHeaders
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/contentTypes/{contentTypeId}/contentItems/{contentItemId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.contentTypeId,
    Parameters.contentItemId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch0,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ContentItemContract,
      headersMapper: Mappers.ContentItemCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.ContentItemContract,
      headersMapper: Mappers.ContentItemCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ContentItemCreateOrUpdateHeaders
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/contentTypes/{contentTypeId}/contentItems/{contentItemId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.contentTypeId,
    Parameters.contentItemId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch1,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByServiceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ContentItemCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};