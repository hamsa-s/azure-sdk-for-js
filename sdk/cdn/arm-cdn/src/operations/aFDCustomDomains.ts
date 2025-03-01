/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AFDCustomDomains } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClient } from "../cdnManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  AFDDomain,
  AFDCustomDomainsListByProfileNextOptionalParams,
  AFDCustomDomainsListByProfileOptionalParams,
  AFDCustomDomainsListByProfileResponse,
  AFDCustomDomainsGetOptionalParams,
  AFDCustomDomainsGetResponse,
  AFDCustomDomainsCreateOptionalParams,
  AFDCustomDomainsCreateResponse,
  AFDDomainUpdateParameters,
  AFDCustomDomainsUpdateOptionalParams,
  AFDCustomDomainsUpdateResponse,
  AFDCustomDomainsDeleteOptionalParams,
  AFDCustomDomainsRefreshValidationTokenOptionalParams,
  AFDCustomDomainsRefreshValidationTokenResponse,
  AFDCustomDomainsListByProfileNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AFDCustomDomains operations. */
export class AFDCustomDomainsImpl implements AFDCustomDomains {
  private readonly client: CdnManagementClient;

  /**
   * Initialize a new instance of the class AFDCustomDomains class.
   * @param client Reference to the service client
   */
  constructor(client: CdnManagementClient) {
    this.client = client;
  }

  /**
   * Lists existing AzureFrontDoor domains.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param options The options parameters.
   */
  public listByProfile(
    resourceGroupName: string,
    profileName: string,
    options?: AFDCustomDomainsListByProfileOptionalParams
  ): PagedAsyncIterableIterator<AFDDomain> {
    const iter = this.listByProfilePagingAll(
      resourceGroupName,
      profileName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByProfilePagingPage(
          resourceGroupName,
          profileName,
          options
        );
      }
    };
  }

  private async *listByProfilePagingPage(
    resourceGroupName: string,
    profileName: string,
    options?: AFDCustomDomainsListByProfileOptionalParams
  ): AsyncIterableIterator<AFDDomain[]> {
    let result = await this._listByProfile(
      resourceGroupName,
      profileName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByProfileNext(
        resourceGroupName,
        profileName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByProfilePagingAll(
    resourceGroupName: string,
    profileName: string,
    options?: AFDCustomDomainsListByProfileOptionalParams
  ): AsyncIterableIterator<AFDDomain> {
    for await (const page of this.listByProfilePagingPage(
      resourceGroupName,
      profileName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists existing AzureFrontDoor domains.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param options The options parameters.
   */
  private _listByProfile(
    resourceGroupName: string,
    profileName: string,
    options?: AFDCustomDomainsListByProfileOptionalParams
  ): Promise<AFDCustomDomainsListByProfileResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, options },
      listByProfileOperationSpec
    );
  }

  /**
   * Gets an existing AzureFrontDoor domain with the specified domain name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param customDomainName Name of the domain under the profile which is unique globally.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    customDomainName: string,
    options?: AFDCustomDomainsGetOptionalParams
  ): Promise<AFDCustomDomainsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, customDomainName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a new domain within the specified profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param customDomainName Name of the domain under the profile which is unique globally
   * @param customDomain Domain properties
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    profileName: string,
    customDomainName: string,
    customDomain: AFDDomain,
    options?: AFDCustomDomainsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AFDCustomDomainsCreateResponse>,
      AFDCustomDomainsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AFDCustomDomainsCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        profileName,
        customDomainName,
        customDomain,
        options
      },
      createOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Creates a new domain within the specified profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param customDomainName Name of the domain under the profile which is unique globally
   * @param customDomain Domain properties
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    profileName: string,
    customDomainName: string,
    customDomain: AFDDomain,
    options?: AFDCustomDomainsCreateOptionalParams
  ): Promise<AFDCustomDomainsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      profileName,
      customDomainName,
      customDomain,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an existing domain within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param customDomainName Name of the domain under the profile which is unique globally
   * @param customDomainUpdateProperties Domain properties
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    profileName: string,
    customDomainName: string,
    customDomainUpdateProperties: AFDDomainUpdateParameters,
    options?: AFDCustomDomainsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AFDCustomDomainsUpdateResponse>,
      AFDCustomDomainsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AFDCustomDomainsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        profileName,
        customDomainName,
        customDomainUpdateProperties,
        options
      },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Updates an existing domain within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param customDomainName Name of the domain under the profile which is unique globally
   * @param customDomainUpdateProperties Domain properties
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    profileName: string,
    customDomainName: string,
    customDomainUpdateProperties: AFDDomainUpdateParameters,
    options?: AFDCustomDomainsUpdateOptionalParams
  ): Promise<AFDCustomDomainsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      profileName,
      customDomainName,
      customDomainUpdateProperties,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an existing AzureFrontDoor domain with the specified domain name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param customDomainName Name of the domain under the profile which is unique globally.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    profileName: string,
    customDomainName: string,
    options?: AFDCustomDomainsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, profileName, customDomainName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Deletes an existing AzureFrontDoor domain with the specified domain name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param customDomainName Name of the domain under the profile which is unique globally.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    profileName: string,
    customDomainName: string,
    options?: AFDCustomDomainsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      profileName,
      customDomainName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates the domain validation token.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param customDomainName Name of the domain under the profile which is unique globally.
   * @param options The options parameters.
   */
  async beginRefreshValidationToken(
    resourceGroupName: string,
    profileName: string,
    customDomainName: string,
    options?: AFDCustomDomainsRefreshValidationTokenOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AFDCustomDomainsRefreshValidationTokenResponse>,
      AFDCustomDomainsRefreshValidationTokenResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AFDCustomDomainsRefreshValidationTokenResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, profileName, customDomainName, options },
      refreshValidationTokenOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Updates the domain validation token.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param customDomainName Name of the domain under the profile which is unique globally.
   * @param options The options parameters.
   */
  async beginRefreshValidationTokenAndWait(
    resourceGroupName: string,
    profileName: string,
    customDomainName: string,
    options?: AFDCustomDomainsRefreshValidationTokenOptionalParams
  ): Promise<AFDCustomDomainsRefreshValidationTokenResponse> {
    const poller = await this.beginRefreshValidationToken(
      resourceGroupName,
      profileName,
      customDomainName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByProfileNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByProfile method.
   * @param options The options parameters.
   */
  private _listByProfileNext(
    resourceGroupName: string,
    profileName: string,
    nextLink: string,
    options?: AFDCustomDomainsListByProfileNextOptionalParams
  ): Promise<AFDCustomDomainsListByProfileNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, nextLink, options },
      listByProfileNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProfileOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/customDomains",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AFDDomainListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/customDomains/{customDomainName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AFDDomain
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.customDomainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/customDomains/{customDomainName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AFDDomain
    },
    201: {
      bodyMapper: Mappers.AFDDomain
    },
    202: {
      bodyMapper: Mappers.AFDDomain
    },
    204: {
      bodyMapper: Mappers.AFDDomain
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  requestBody: Parameters.customDomain,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.customDomainName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/customDomains/{customDomainName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AFDDomain
    },
    201: {
      bodyMapper: Mappers.AFDDomain
    },
    202: {
      bodyMapper: Mappers.AFDDomain
    },
    204: {
      bodyMapper: Mappers.AFDDomain
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  requestBody: Parameters.customDomainUpdateProperties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.customDomainName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/customDomains/{customDomainName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.customDomainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const refreshValidationTokenOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/customDomains/{customDomainName}/refreshValidationToken",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ValidationToken
    },
    201: {
      bodyMapper: Mappers.ValidationToken
    },
    202: {
      bodyMapper: Mappers.ValidationToken
    },
    204: {
      bodyMapper: Mappers.ValidationToken
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.customDomainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByProfileNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AFDDomainListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
