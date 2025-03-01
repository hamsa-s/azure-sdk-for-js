// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrates the use of SchemaRegistryAvroEncoder to create messages with avro-encoded payload using schema from Schema Registry.
 */

import { DefaultAzureCredential } from "@azure/identity";
import { SchemaRegistryClient, SchemaDescription } from "@azure/schema-registry";
import { SchemaRegistryAvroEncoder } from "@azure/schema-registry-avro";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

// The fully qualified namespace for schema registry
const schemaRegistryFullyQualifiedNamespace =
  process.env["SCHEMA_REGISTRY_ENDPOINT"] || "<endpoint>";

// The schema group to use for schema registeration or lookup
const groupName = process.env["SCHEMA_REGISTRY_GROUP"] || "AzureSdkSampleGroup";

// Sample Avro Schema for user with first and last names
const schemaObject = {
  type: "record",
  name: "User",
  namespace: "com.azure.schemaregistry.samples",
  fields: [
    {
      name: "firstName",
      type: "string",
    },
    {
      name: "lastName",
      type: "string",
    },
  ],
};

// Matching TypeScript interface for schema
interface User {
  firstName: string;
  lastName: string;
}

const schema = JSON.stringify(schemaObject);

// Description of the schema for registration
const schemaDescription: SchemaDescription = {
  name: `${schemaObject.namespace}.${schemaObject.name}`,
  groupName,
  format: "Avro",
  definition: schema,
};

export async function main() {
  // Create a new client
  const client = new SchemaRegistryClient(
    schemaRegistryFullyQualifiedNamespace,
    new DefaultAzureCredential()
  );

  // Register the schema. This would generally have been done somewhere else.
  // You can also skip this step and let `encodeMessageData` automatically register
  // schemas using autoRegisterSchemas=true, but that is NOT recommended in production.
  await client.registerSchema(schemaDescription);

  // Create a new encoder backed by the client
  const encoder = new SchemaRegistryAvroEncoder(client, { groupName });

  // encode an object that matches the schema and put it in a message
  const value: User = { firstName: "Jane", lastName: "Doe" };
  const message = await encoder.encodeMessageData(value, schema);
  console.log("Created message:");
  console.log(JSON.stringify(message));

  // decode the message back to an object
  const decodedObject = await encoder.decodeMessageData(message);
  console.log("Decoded object:");
  console.log(JSON.stringify(decodedObject as User));
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
