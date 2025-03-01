/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Fetches Vault Encryption config.
 *
 * @summary Fetches Vault Encryption config.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2021-10-01/examples/BackupResourceEncryptionConfig_Get.json
 */
import { RecoveryServicesBackupClient } from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";

async function getVaultEncryptionConfiguration() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const vaultName = "rishTestVault";
  const resourceGroupName = "rishgrp";
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.backupResourceEncryptionConfigs.get(
    vaultName,
    resourceGroupName
  );
  console.log(result);
}

getVaultEncryptionConfiguration().catch(console.error);
