/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { VideoAnalyzerOperationStatuses } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { VideoAnalyzerContext } from "../videoAnalyzerContext";
import {
  VideoAnalyzerOperationStatusesGetOptionalParams,
  VideoAnalyzerOperationStatusesGetResponse
} from "../models";

/** Class containing VideoAnalyzerOperationStatuses operations. */
export class VideoAnalyzerOperationStatusesImpl
  implements VideoAnalyzerOperationStatuses {
  private readonly client: VideoAnalyzerContext;

  /**
   * Initialize a new instance of the class VideoAnalyzerOperationStatuses class.
   * @param client Reference to the service client
   */
  constructor(client: VideoAnalyzerContext) {
    this.client = client;
  }

  /**
   * Get video analyzer operation status.
   * @param locationName Location name.
   * @param operationId Operation Id.
   * @param options The options parameters.
   */
  get(
    locationName: string,
    operationId: string,
    options?: VideoAnalyzerOperationStatusesGetOptionalParams
  ): Promise<VideoAnalyzerOperationStatusesGetResponse> {
    return this.client.sendOperationRequest(
      { locationName, operationId, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Media/locations/{locationName}/videoAnalyzerOperationStatuses/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VideoAnalyzerOperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.operationId,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};