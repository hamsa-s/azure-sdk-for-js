/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  ImportImageParameters as ImportImageParametersMapper,
  RegistryNameCheckRequest as RegistryNameCheckRequestMapper,
  Registry as RegistryMapper,
  RegistryUpdateParameters as RegistryUpdateParametersMapper,
  RegenerateCredentialParameters as RegenerateCredentialParametersMapper,
  RunRequest as RunRequestMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  Replication as ReplicationMapper,
  ReplicationUpdateParameters as ReplicationUpdateParametersMapper,
  WebhookCreateParameters as WebhookCreateParametersMapper,
  WebhookUpdateParameters as WebhookUpdateParametersMapper,
  AgentPool as AgentPoolMapper,
  AgentPoolUpdateParameters as AgentPoolUpdateParametersMapper,
  RunUpdateParameters as RunUpdateParametersMapper,
  TaskRun as TaskRunMapper,
  TaskRunUpdateParameters as TaskRunUpdateParametersMapper,
  Task as TaskMapper,
  TaskUpdateParameters as TaskUpdateParametersMapper
} from "../models/mappers";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: ImportImageParametersMapper
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-09-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const registryName: OperationURLParameter = {
  parameterPath: "registryName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]*$"),
      MaxLength: 50,
      MinLength: 5
    },
    serializedName: "registryName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const registryNameCheckRequest: OperationParameter = {
  parameterPath: "registryNameCheckRequest",
  mapper: RegistryNameCheckRequestMapper
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const registry: OperationParameter = {
  parameterPath: "registry",
  mapper: RegistryMapper
};

export const registryUpdateParameters: OperationParameter = {
  parameterPath: "registryUpdateParameters",
  mapper: RegistryUpdateParametersMapper
};

export const groupName: OperationURLParameter = {
  parameterPath: "groupName",
  mapper: {
    serializedName: "groupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const regenerateCredentialParameters: OperationParameter = {
  parameterPath: "regenerateCredentialParameters",
  mapper: RegenerateCredentialParametersMapper
};

export const runRequest: OperationParameter = {
  parameterPath: "runRequest",
  mapper: RunRequestMapper
};

export const apiVersion1: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2019-06-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const privateEndpointConnection: OperationParameter = {
  parameterPath: "privateEndpointConnection",
  mapper: PrivateEndpointConnectionMapper
};

export const replicationName: OperationURLParameter = {
  parameterPath: "replicationName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]*$"),
      MaxLength: 50,
      MinLength: 5
    },
    serializedName: "replicationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const replication: OperationParameter = {
  parameterPath: "replication",
  mapper: ReplicationMapper
};

export const replicationUpdateParameters: OperationParameter = {
  parameterPath: "replicationUpdateParameters",
  mapper: ReplicationUpdateParametersMapper
};

export const webhookName: OperationURLParameter = {
  parameterPath: "webhookName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]*$"),
      MaxLength: 50,
      MinLength: 5
    },
    serializedName: "webhookName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const webhookCreateParameters: OperationParameter = {
  parameterPath: "webhookCreateParameters",
  mapper: WebhookCreateParametersMapper
};

export const webhookUpdateParameters: OperationParameter = {
  parameterPath: "webhookUpdateParameters",
  mapper: WebhookUpdateParametersMapper
};

export const agentPoolName: OperationURLParameter = {
  parameterPath: "agentPoolName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]*$"),
      MaxLength: 20,
      MinLength: 3
    },
    serializedName: "agentPoolName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const agentPool: OperationParameter = {
  parameterPath: "agentPool",
  mapper: AgentPoolMapper
};

export const updateParameters: OperationParameter = {
  parameterPath: "updateParameters",
  mapper: AgentPoolUpdateParametersMapper
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};

export const runId: OperationURLParameter = {
  parameterPath: "runId",
  mapper: {
    serializedName: "runId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const runUpdateParameters: OperationParameter = {
  parameterPath: "runUpdateParameters",
  mapper: RunUpdateParametersMapper
};

export const taskRunName: OperationURLParameter = {
  parameterPath: "taskRunName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]*$"),
      MaxLength: 50,
      MinLength: 5
    },
    serializedName: "taskRunName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const taskRun: OperationParameter = {
  parameterPath: "taskRun",
  mapper: TaskRunMapper
};

export const updateParameters1: OperationParameter = {
  parameterPath: "updateParameters",
  mapper: TaskRunUpdateParametersMapper
};

export const taskName: OperationURLParameter = {
  parameterPath: "taskName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-_]*$"),
      MaxLength: 50,
      MinLength: 5
    },
    serializedName: "taskName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const taskCreateParameters: OperationParameter = {
  parameterPath: "taskCreateParameters",
  mapper: TaskMapper
};

export const taskUpdateParameters: OperationParameter = {
  parameterPath: "taskUpdateParameters",
  mapper: TaskUpdateParametersMapper
};
