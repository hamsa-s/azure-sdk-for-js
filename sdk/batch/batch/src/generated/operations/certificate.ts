/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GeneratedClient } from "../generatedClient";
import {
  Certificate as CertificateModel,
  CertificateListNextOptionalParams,
  CertificateListOptionalParams,
  CertificateAddParameter,
  CertificateAddOptionalParams,
  CertificateAddResponse,
  CertificateListResponse,
  CertificateCancelDeletionOptionalParams,
  CertificateCancelDeletionResponse,
  CertificateDeleteOptionalParams,
  CertificateDeleteResponse,
  CertificateGetOptionalParams,
  CertificateGetResponse,
  CertificateListNextResponse
} from "../models";

/** Class representing a Certificate. */
export class Certificate {
  private readonly client: GeneratedClient;

  /**
   * Initialize a new instance of the class Certificate class.
   * @param client Reference to the service client
   */
  constructor(client: GeneratedClient) {
    this.client = client;
  }

  /**
   * Lists all of the Certificates that have been added to the specified Account.
   * @param options The options parameters.
   */
  public list(
    options?: CertificateListOptionalParams
  ): PagedAsyncIterableIterator<CertificateModel> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: CertificateListOptionalParams
  ): AsyncIterableIterator<CertificateModel[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: CertificateListOptionalParams
  ): AsyncIterableIterator<CertificateModel> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Adds a Certificate to the specified Account.
   * @param certificate The Certificate to be added.
   * @param options The options parameters.
   */
  add(
    certificate: CertificateAddParameter,
    options?: CertificateAddOptionalParams
  ): Promise<CertificateAddResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      certificate,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      addOperationSpec
    ) as Promise<CertificateAddResponse>;
  }

  /**
   * Lists all of the Certificates that have been added to the specified Account.
   * @param options The options parameters.
   */
  private _list(
    options?: CertificateListOptionalParams
  ): Promise<CertificateListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<CertificateListResponse>;
  }

  /**
   * If you try to delete a Certificate that is being used by a Pool or Compute Node, the status of the
   * Certificate changes to deleteFailed. If you decide that you want to continue using the Certificate,
   * you can use this operation to set the status of the Certificate back to active. If you intend to
   * delete the Certificate, you do not need to run this operation after the deletion failed. You must
   * make sure that the Certificate is not being used by any resources, and then you can try again to
   * delete the Certificate.
   * @param thumbprintAlgorithm The algorithm used to derive the thumbprint parameter. This must be sha1.
   * @param thumbprint The thumbprint of the Certificate being deleted.
   * @param options The options parameters.
   */
  cancelDeletion(
    thumbprintAlgorithm: string,
    thumbprint: string,
    options?: CertificateCancelDeletionOptionalParams
  ): Promise<CertificateCancelDeletionResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      thumbprintAlgorithm,
      thumbprint,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      cancelDeletionOperationSpec
    ) as Promise<CertificateCancelDeletionResponse>;
  }

  /**
   * You cannot delete a Certificate if a resource (Pool or Compute Node) is using it. Before you can
   * delete a Certificate, you must therefore make sure that the Certificate is not associated with any
   * existing Pools, the Certificate is not installed on any Nodes (even if you remove a Certificate from
   * a Pool, it is not removed from existing Compute Nodes in that Pool until they restart), and no
   * running Tasks depend on the Certificate. If you try to delete a Certificate that is in use, the
   * deletion fails. The Certificate status changes to deleteFailed. You can use Cancel Delete
   * Certificate to set the status back to active if you decide that you want to continue using the
   * Certificate.
   * @param thumbprintAlgorithm The algorithm used to derive the thumbprint parameter. This must be sha1.
   * @param thumbprint The thumbprint of the Certificate to be deleted.
   * @param options The options parameters.
   */
  delete(
    thumbprintAlgorithm: string,
    thumbprint: string,
    options?: CertificateDeleteOptionalParams
  ): Promise<CertificateDeleteResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      thumbprintAlgorithm,
      thumbprint,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<CertificateDeleteResponse>;
  }

  /**
   * Gets information about the specified Certificate.
   * @param thumbprintAlgorithm The algorithm used to derive the thumbprint parameter. This must be sha1.
   * @param thumbprint The thumbprint of the Certificate to get.
   * @param options The options parameters.
   */
  get(
    thumbprintAlgorithm: string,
    thumbprint: string,
    options?: CertificateGetOptionalParams
  ): Promise<CertificateGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      thumbprintAlgorithm,
      thumbprint,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<CertificateGetResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: CertificateListNextOptionalParams
  ): Promise<CertificateListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<CertificateListNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const addOperationSpec: coreHttp.OperationSpec = {
  path: "/certificates",
  httpMethod: "POST",
  responses: {
    201: {
      headersMapper: Mappers.CertificateAddHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  requestBody: Parameters.certificate,
  queryParameters: [Parameters.apiVersion, Parameters.timeout32],
  urlParameters: [Parameters.batchUrl],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.clientRequestId32,
    Parameters.returnClientRequestId32,
    Parameters.ocpDate32
  ],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path: "/certificates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateListResult,
      headersMapper: Mappers.CertificateListHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter7,
    Parameters.select6,
    Parameters.maxResults8,
    Parameters.timeout33
  ],
  urlParameters: [Parameters.batchUrl],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId33,
    Parameters.returnClientRequestId33,
    Parameters.ocpDate33
  ],
  serializer
};
const cancelDeletionOperationSpec: coreHttp.OperationSpec = {
  path:
    "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})/canceldelete",
  httpMethod: "POST",
  responses: {
    204: {
      headersMapper: Mappers.CertificateCancelDeletionHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.timeout34],
  urlParameters: [
    Parameters.batchUrl,
    Parameters.thumbprintAlgorithm,
    Parameters.thumbprint
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId34,
    Parameters.returnClientRequestId34,
    Parameters.ocpDate34
  ],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})",
  httpMethod: "DELETE",
  responses: {
    202: {
      headersMapper: Mappers.CertificateDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.timeout35],
  urlParameters: [
    Parameters.batchUrl,
    Parameters.thumbprintAlgorithm,
    Parameters.thumbprint
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId35,
    Parameters.returnClientRequestId35,
    Parameters.ocpDate35
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Certificate,
      headersMapper: Mappers.CertificateGetHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.select7,
    Parameters.timeout36
  ],
  urlParameters: [
    Parameters.batchUrl,
    Parameters.thumbprintAlgorithm,
    Parameters.thumbprint
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId36,
    Parameters.returnClientRequestId36,
    Parameters.ocpDate36
  ],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateListResult,
      headersMapper: Mappers.CertificateListNextHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter7,
    Parameters.select6,
    Parameters.maxResults8,
    Parameters.timeout33
  ],
  urlParameters: [Parameters.batchUrl, Parameters.nextLink],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId33,
    Parameters.returnClientRequestId33,
    Parameters.ocpDate33
  ],
  serializer
};