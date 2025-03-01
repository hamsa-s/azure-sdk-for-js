## API Report File for "@azure/arm-botservice"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

// @public
export type AlexaChannel = Channel & {
    channelName: "AlexaChannel";
    properties?: AlexaChannelProperties;
};

// @public
export interface AlexaChannelProperties {
    alexaSkillId: string;
    isEnabled: boolean;
    readonly serviceEndpointUri?: string;
    readonly urlFragment?: string;
}

// @public (undocumented)
export class AzureBotService extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: AzureBotServiceOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    botConnection: BotConnection;
    // (undocumented)
    bots: Bots;
    // (undocumented)
    channels: Channels;
    // (undocumented)
    directLine: DirectLine;
    // (undocumented)
    hostSettings: HostSettings;
    // (undocumented)
    operationResults: OperationResults;
    // (undocumented)
    operations: Operations;
    // (undocumented)
    privateEndpointConnections: PrivateEndpointConnections;
    // (undocumented)
    privateLinkResources: PrivateLinkResources;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface AzureBotServiceOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export type Bot = Resource & {
    properties?: BotProperties;
};

// @public
export type BotChannel = Resource & {
    properties?: ChannelUnion;
};

// @public
export interface BotConnection {
    create(resourceGroupName: string, resourceName: string, connectionName: string, parameters: ConnectionSetting, options?: BotConnectionCreateOptionalParams): Promise<BotConnectionCreateResponse>;
    delete(resourceGroupName: string, resourceName: string, connectionName: string, options?: BotConnectionDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, resourceName: string, connectionName: string, options?: BotConnectionGetOptionalParams): Promise<BotConnectionGetResponse>;
    listByBotService(resourceGroupName: string, resourceName: string, options?: BotConnectionListByBotServiceOptionalParams): PagedAsyncIterableIterator<ConnectionSetting>;
    listServiceProviders(options?: BotConnectionListServiceProvidersOptionalParams): Promise<BotConnectionListServiceProvidersResponse>;
    listWithSecrets(resourceGroupName: string, resourceName: string, connectionName: string, options?: BotConnectionListWithSecretsOptionalParams): Promise<BotConnectionListWithSecretsResponse>;
    update(resourceGroupName: string, resourceName: string, connectionName: string, parameters: ConnectionSetting, options?: BotConnectionUpdateOptionalParams): Promise<BotConnectionUpdateResponse>;
}

// @public
export interface BotConnectionCreateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type BotConnectionCreateResponse = ConnectionSetting;

// @public
export interface BotConnectionDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface BotConnectionGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type BotConnectionGetResponse = ConnectionSetting;

// @public
export interface BotConnectionListByBotServiceNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type BotConnectionListByBotServiceNextResponse = ConnectionSettingResponseList;

// @public
export interface BotConnectionListByBotServiceOptionalParams extends coreClient.OperationOptions {
}

// @public
export type BotConnectionListByBotServiceResponse = ConnectionSettingResponseList;

// @public
export interface BotConnectionListServiceProvidersOptionalParams extends coreClient.OperationOptions {
}

// @public
export type BotConnectionListServiceProvidersResponse = ServiceProviderResponseList;

// @public
export interface BotConnectionListWithSecretsOptionalParams extends coreClient.OperationOptions {
}

// @public
export type BotConnectionListWithSecretsResponse = ConnectionSetting;

// @public
export interface BotConnectionUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type BotConnectionUpdateResponse = ConnectionSetting;

// @public
export interface BotProperties {
    allSettings?: {
        [propertyName: string]: string;
    };
    appPasswordHint?: string;
    cmekEncryptionStatus?: string;
    cmekKeyVaultUrl?: string;
    readonly configuredChannels?: string[];
    description?: string;
    developerAppInsightKey?: string;
    developerAppInsightsApiKey?: string;
    developerAppInsightsApplicationId?: string;
    disableLocalAuth?: boolean;
    displayName: string;
    readonly enabledChannels?: string[];
    endpoint: string;
    readonly endpointVersion?: string;
    iconUrl?: string;
    isCmekEnabled?: boolean;
    isDeveloperAppInsightsApiKeySet?: boolean;
    isStreamingSupported?: boolean;
    luisAppIds?: string[];
    luisKey?: string;
    manifestUrl?: string;
    readonly migrationToken?: string;
    msaAppId: string;
    msaAppMSIResourceId?: string;
    msaAppTenantId?: string;
    msaAppType?: MsaAppType;
    openWithHint?: string;
    parameters?: {
        [propertyName: string]: string;
    };
    readonly privateEndpointConnections?: PrivateEndpointConnection[];
    readonly provisioningState?: string;
    publicNetworkAccess?: PublicNetworkAccess;
    publishingCredentials?: string;
    schemaTransformationVersion?: string;
    storageResourceId?: string;
}

// @public
export interface BotResponseList {
    nextLink?: string;
    readonly value?: Bot[];
}

// @public
export interface Bots {
    create(resourceGroupName: string, resourceName: string, parameters: Bot, options?: BotsCreateOptionalParams): Promise<BotsCreateResponse>;
    delete(resourceGroupName: string, resourceName: string, options?: BotsDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, resourceName: string, options?: BotsGetOptionalParams): Promise<BotsGetResponse>;
    getCheckNameAvailability(parameters: CheckNameAvailabilityRequestBody, options?: BotsGetCheckNameAvailabilityOptionalParams): Promise<BotsGetCheckNameAvailabilityResponse>;
    list(options?: BotsListOptionalParams): PagedAsyncIterableIterator<Bot>;
    listByResourceGroup(resourceGroupName: string, options?: BotsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Bot>;
    update(resourceGroupName: string, resourceName: string, options?: BotsUpdateOptionalParams): Promise<BotsUpdateResponse>;
}

// @public
export interface BotsCreateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type BotsCreateResponse = Bot;

// @public
export interface BotsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface BotsGetCheckNameAvailabilityOptionalParams extends coreClient.OperationOptions {
}

// @public
export type BotsGetCheckNameAvailabilityResponse = CheckNameAvailabilityResponseBody;

// @public
export interface BotsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type BotsGetResponse = Bot;

// @public
export interface BotsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type BotsListByResourceGroupNextResponse = BotResponseList;

// @public
export interface BotsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type BotsListByResourceGroupResponse = BotResponseList;

// @public
export interface BotsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type BotsListNextResponse = BotResponseList;

// @public
export interface BotsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type BotsListResponse = BotResponseList;

// @public
export interface BotsUpdateOptionalParams extends coreClient.OperationOptions {
    etag?: string;
    kind?: Kind;
    location?: string;
    properties?: BotProperties;
    sku?: Sku;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export type BotsUpdateResponse = Bot;

// @public
export interface Channel {
    channelName: "AlexaChannel" | "FacebookChannel" | "EmailChannel" | "MsTeamsChannel" | "SkypeChannel" | "KikChannel" | "WebChatChannel" | "DirectLineChannel" | "TelegramChannel" | "SmsChannel" | "SlackChannel" | "LineChannel" | "DirectLineSpeechChannel";
    etag?: string;
    location?: string;
    readonly provisioningState?: string;
}

// @public
export type ChannelName = "AlexaChannel" | "FacebookChannel" | "EmailChannel" | "KikChannel" | "TelegramChannel" | "SlackChannel" | "MsTeamsChannel" | "SkypeChannel" | "WebChatChannel" | "DirectLineChannel" | "SmsChannel" | "LineChannel" | "DirectLineSpeechChannel";

// @public
export interface ChannelResponseList {
    nextLink?: string;
    readonly value?: BotChannel[];
}

// @public
export interface Channels {
    create(resourceGroupName: string, resourceName: string, channelName: ChannelName, parameters: BotChannel, options?: ChannelsCreateOptionalParams): Promise<ChannelsCreateResponse>;
    delete(resourceGroupName: string, resourceName: string, channelName: string, options?: ChannelsDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, resourceName: string, channelName: string, options?: ChannelsGetOptionalParams): Promise<ChannelsGetResponse>;
    listByResourceGroup(resourceGroupName: string, resourceName: string, options?: ChannelsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<BotChannel>;
    listWithKeys(resourceGroupName: string, resourceName: string, channelName: ChannelName, options?: ChannelsListWithKeysOptionalParams): Promise<ChannelsListWithKeysResponse>;
    update(resourceGroupName: string, resourceName: string, channelName: ChannelName, options?: ChannelsUpdateOptionalParams): Promise<ChannelsUpdateResponse>;
}

// @public
export interface ChannelsCreateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ChannelsCreateResponse = BotChannel;

// @public
export interface ChannelsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface ChannelSettings {
    botIconUrl?: string;
    botId?: string;
    channelDisplayName?: string;
    channelId?: string;
    disableLocalAuth?: boolean;
    extensionKey1?: string;
    extensionKey2?: string;
    isEnabled?: boolean;
    sites?: Site[];
}

// @public
export interface ChannelsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ChannelsGetResponse = BotChannel;

// @public
export interface ChannelsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ChannelsListByResourceGroupNextResponse = ChannelResponseList;

// @public
export interface ChannelsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ChannelsListByResourceGroupResponse = ChannelResponseList;

// @public
export interface ChannelsListWithKeysOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ChannelsListWithKeysResponse = ListChannelWithKeysResponse;

// @public
export interface ChannelsUpdateOptionalParams extends coreClient.OperationOptions {
    etag?: string;
    kind?: Kind;
    location?: string;
    properties?: ChannelUnion;
    sku?: Sku;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export type ChannelsUpdateResponse = BotChannel;

// @public (undocumented)
export type ChannelUnion = Channel | AlexaChannel | FacebookChannel | EmailChannel | MsTeamsChannel | SkypeChannel | KikChannel | WebChatChannel | DirectLineChannel | TelegramChannel | SmsChannel | SlackChannel | LineChannel | DirectLineSpeechChannel;

// @public
export interface CheckNameAvailabilityRequestBody {
    name?: string;
    type?: string;
}

// @public
export interface CheckNameAvailabilityResponseBody {
    message?: string;
    valid?: boolean;
}

// @public
export interface ConnectionItemName {
    readonly name?: string;
}

// @public
export type ConnectionSetting = Resource & {
    properties?: ConnectionSettingProperties;
};

// @public
export interface ConnectionSettingParameter {
    key?: string;
    value?: string;
}

// @public
export interface ConnectionSettingProperties {
    clientId?: string;
    clientSecret?: string;
    id?: string;
    name?: string;
    parameters?: ConnectionSettingParameter[];
    provisioningState?: string;
    scopes?: string;
    serviceProviderDisplayName?: string;
    serviceProviderId?: string;
    readonly settingId?: string;
}

// @public
export interface ConnectionSettingResponseList {
    nextLink?: string;
    readonly value?: ConnectionSetting[];
}

// @public
export interface DirectLine {
    regenerateKeys(resourceGroupName: string, resourceName: string, channelName: RegenerateKeysChannelName, parameters: SiteInfo, options?: DirectLineRegenerateKeysOptionalParams): Promise<DirectLineRegenerateKeysResponse>;
}

// @public
export type DirectLineChannel = Channel & {
    channelName: "DirectLineChannel";
    properties?: DirectLineChannelProperties;
};

// @public
export interface DirectLineChannelProperties {
    directLineEmbedCode?: string;
    sites?: DirectLineSite[];
}

// @public
export interface DirectLineRegenerateKeysOptionalParams extends coreClient.OperationOptions {
}

// @public
export type DirectLineRegenerateKeysResponse = BotChannel;

// @public
export interface DirectLineSite {
    isBlockUserUploadEnabled?: boolean;
    isEnabled: boolean;
    isSecureSiteEnabled?: boolean;
    isV1Enabled: boolean;
    isV3Enabled: boolean;
    readonly key?: string;
    readonly key2?: string;
    readonly siteId?: string;
    siteName: string;
    trustedOrigins?: string[];
}

// @public
export type DirectLineSpeechChannel = Channel & {
    channelName: "DirectLineSpeechChannel";
    properties?: DirectLineSpeechChannelProperties;
};

// @public
export interface DirectLineSpeechChannelProperties {
    cognitiveServiceRegion: string;
    cognitiveServiceSubscriptionKey: string;
    customSpeechModelId?: string;
    customVoiceDeploymentId?: string;
    isDefaultBotForCogSvcAccount?: boolean;
    isEnabled?: boolean;
}

// @public
export type EmailChannel = Channel & {
    channelName: "EmailChannel";
    properties?: EmailChannelProperties;
};

// @public
export interface EmailChannelProperties {
    emailAddress: string;
    isEnabled: boolean;
    password?: string;
}

// @public
export interface ErrorBody {
    code: string;
    message: string;
}

// @public
export interface ErrorModel {
    error?: ErrorBody;
}

// @public
export type FacebookChannel = Channel & {
    channelName: "FacebookChannel";
    properties?: FacebookChannelProperties;
};

// @public
export interface FacebookChannelProperties {
    appId: string;
    appSecret?: string;
    readonly callbackUrl?: string;
    isEnabled: boolean;
    pages?: FacebookPage[];
    readonly verifyToken?: string;
}

// @public
export interface FacebookPage {
    accessToken?: string;
    id: string;
}

// @public
export interface HostSettings {
    get(options?: HostSettingsGetOptionalParams): Promise<HostSettingsGetResponse>;
}

// @public
export interface HostSettingsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type HostSettingsGetResponse = HostSettingsResponse;

// @public
export interface HostSettingsResponse {
    botOpenIdMetadata?: string;
    oAuthUrl?: string;
    toBotFromChannelOpenIdMetadataUrl?: string;
    toBotFromChannelTokenIssuer?: string;
    toBotFromEmulatorOpenIdMetadataUrl?: string;
    toChannelFromBotLoginUrl?: string;
    toChannelFromBotOAuthScope?: string;
    validateAuthority?: boolean;
}

// @public
export type Key = "key1" | "key2";

// @public
export type KikChannel = Channel & {
    channelName: "KikChannel";
    properties?: KikChannelProperties;
};

// @public
export interface KikChannelProperties {
    apiKey?: string;
    isEnabled: boolean;
    isValidated?: boolean;
    userName: string;
}

// @public
export type Kind = string;

// @public
export enum KnownKind {
    // (undocumented)
    Azurebot = "azurebot",
    // (undocumented)
    Bot = "bot",
    // (undocumented)
    Designer = "designer",
    // (undocumented)
    Function = "function",
    // (undocumented)
    Sdk = "sdk"
}

// @public
export enum KnownMsaAppType {
    // (undocumented)
    MultiTenant = "MultiTenant",
    // (undocumented)
    SingleTenant = "SingleTenant",
    // (undocumented)
    UserAssignedMSI = "UserAssignedMSI"
}

// @public
export enum KnownOperationResultStatus {
    // (undocumented)
    Canceled = "Canceled",
    // (undocumented)
    Failed = "Failed",
    // (undocumented)
    Requested = "Requested",
    // (undocumented)
    Running = "Running",
    // (undocumented)
    Succeeded = "Succeeded"
}

// @public
export enum KnownPrivateEndpointConnectionProvisioningState {
    // (undocumented)
    Creating = "Creating",
    // (undocumented)
    Deleting = "Deleting",
    // (undocumented)
    Failed = "Failed",
    // (undocumented)
    Succeeded = "Succeeded"
}

// @public
export enum KnownPrivateEndpointServiceConnectionStatus {
    // (undocumented)
    Approved = "Approved",
    // (undocumented)
    Pending = "Pending",
    // (undocumented)
    Rejected = "Rejected"
}

// @public
export enum KnownPublicNetworkAccess {
    // (undocumented)
    Disabled = "Disabled",
    // (undocumented)
    Enabled = "Enabled"
}

// @public
export enum KnownSkuName {
    // (undocumented)
    F0 = "F0",
    // (undocumented)
    S1 = "S1"
}

// @public
export enum KnownSkuTier {
    // (undocumented)
    Free = "Free",
    // (undocumented)
    Standard = "Standard"
}

// @public
export type LineChannel = Channel & {
    channelName: "LineChannel";
    properties?: LineChannelProperties;
};

// @public
export interface LineChannelProperties {
    readonly callbackUrl?: string;
    readonly isValidated?: boolean;
    lineRegistrations: LineRegistration[];
}

// @public
export interface LineRegistration {
    channelAccessToken?: string;
    channelSecret?: string;
    readonly generatedId?: string;
}

// @public
export type ListChannelWithKeysResponse = BotChannel & {
    resource?: ChannelUnion;
    setting?: ChannelSettings;
};

// @public
export type MsaAppType = string;

// @public
export type MsTeamsChannel = Channel & {
    channelName: "MsTeamsChannel";
    properties?: MsTeamsChannelProperties;
};

// @public
export interface MsTeamsChannelProperties {
    acceptedTerms?: boolean;
    callingWebHook?: string;
    deploymentEnvironment?: string;
    enableCalling?: boolean;
    incomingCallRoute?: string;
    isEnabled: boolean;
}

// @public
export interface OperationDisplayInfo {
    description?: string;
    operation?: string;
    provider?: string;
    resource?: string;
}

// @public
export interface OperationEntity {
    display?: OperationDisplayInfo;
    name?: string;
    origin?: string;
    properties?: Record<string, unknown>;
}

// @public
export interface OperationEntityListResult {
    nextLink?: string;
    value?: OperationEntity[];
}

// @public
export interface OperationResults {
    beginGet(operationResultId: string, options?: OperationResultsGetOptionalParams): Promise<PollerLike<PollOperationState<OperationResultsGetResponse>, OperationResultsGetResponse>>;
    beginGetAndWait(operationResultId: string, options?: OperationResultsGetOptionalParams): Promise<OperationResultsGetResponse>;
}

// @public
export interface OperationResultsDescription {
    readonly id?: string;
    readonly name?: string;
    readonly startTime?: Date;
    readonly status?: OperationResultStatus;
}

// @public
export interface OperationResultsGetOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type OperationResultsGetResponse = OperationResultsDescription;

// @public
export type OperationResultStatus = string;

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<OperationEntity>;
}

// @public
export interface OperationsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListNextResponse = OperationEntityListResult;

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationEntityListResult;

// @public
export interface PrivateEndpoint {
    readonly id?: string;
}

// @public
export type PrivateEndpointConnection = PrivateLinkResourceBase & {
    privateEndpoint?: PrivateEndpoint;
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
    readonly provisioningState?: PrivateEndpointConnectionProvisioningState;
};

// @public
export interface PrivateEndpointConnectionListResult {
    value?: PrivateEndpointConnection[];
}

// @public
export type PrivateEndpointConnectionProvisioningState = string;

// @public
export interface PrivateEndpointConnections {
    create(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, properties: PrivateEndpointConnection, options?: PrivateEndpointConnectionsCreateOptionalParams): Promise<PrivateEndpointConnectionsCreateResponse>;
    delete(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsGetOptionalParams): Promise<PrivateEndpointConnectionsGetResponse>;
    list(resourceGroupName: string, resourceName: string, options?: PrivateEndpointConnectionsListOptionalParams): PagedAsyncIterableIterator<PrivateEndpointConnection>;
}

// @public
export interface PrivateEndpointConnectionsCreateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PrivateEndpointConnectionsCreateResponse = PrivateEndpointConnection;

// @public
export interface PrivateEndpointConnectionsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface PrivateEndpointConnectionsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnection;

// @public
export interface PrivateEndpointConnectionsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PrivateEndpointConnectionsListResponse = PrivateEndpointConnectionListResult;

// @public
export type PrivateEndpointServiceConnectionStatus = string;

// @public
export type PrivateLinkResource = PrivateLinkResourceBase & {
    readonly groupId?: string;
    readonly requiredMembers?: string[];
    requiredZoneNames?: string[];
};

// @public
export interface PrivateLinkResourceBase {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
}

// @public
export interface PrivateLinkResourceListResult {
    value?: PrivateLinkResource[];
}

// @public
export interface PrivateLinkResources {
    listByBotResource(resourceGroupName: string, resourceName: string, options?: PrivateLinkResourcesListByBotResourceOptionalParams): Promise<PrivateLinkResourcesListByBotResourceResponse>;
}

// @public
export interface PrivateLinkResourcesListByBotResourceOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PrivateLinkResourcesListByBotResourceResponse = PrivateLinkResourceListResult;

// @public
export interface PrivateLinkServiceConnectionState {
    actionsRequired?: string;
    description?: string;
    status?: PrivateEndpointServiceConnectionStatus;
}

// @public
export type PublicNetworkAccess = string;

// @public
export type RegenerateKeysChannelName = "WebChatChannel" | "DirectLineChannel";

// @public
export interface Resource {
    etag?: string;
    readonly id?: string;
    kind?: Kind;
    location?: string;
    readonly name?: string;
    sku?: Sku;
    tags?: {
        [propertyName: string]: string;
    };
    readonly type?: string;
    readonly zones?: string[];
}

// @public
export interface ServiceProvider {
    properties?: ServiceProviderProperties;
}

// @public
export interface ServiceProviderParameter {
    readonly default?: string;
    readonly description?: string;
    readonly displayName?: string;
    readonly helpUrl?: string;
    readonly metadata?: ServiceProviderParameterMetadata;
    readonly name?: string;
    readonly type?: string;
}

// @public
export interface ServiceProviderParameterMetadata {
    constraints?: ServiceProviderParameterMetadataConstraints;
}

// @public
export interface ServiceProviderParameterMetadataConstraints {
    required?: boolean;
}

// @public
export interface ServiceProviderProperties {
    readonly devPortalUrl?: string;
    readonly displayName?: string;
    readonly iconUrl?: string;
    readonly id?: string;
    parameters?: ServiceProviderParameter[];
    readonly serviceProviderName?: string;
}

// @public
export interface ServiceProviderResponseList {
    nextLink?: string;
    readonly value?: ServiceProvider[];
}

// @public
export type Site = WebChatSite & DirectLineSite & {
    isTokenEnabled?: boolean;
    eTag?: string;
};

// @public
export interface SiteInfo {
    key: Key;
    siteName: string;
}

// @public
export interface Sku {
    name: SkuName;
    readonly tier?: SkuTier;
}

// @public
export type SkuName = string;

// @public
export type SkuTier = string;

// @public
export type SkypeChannel = Channel & {
    channelName: "SkypeChannel";
    properties?: SkypeChannelProperties;
};

// @public
export interface SkypeChannelProperties {
    callingWebHook?: string;
    enableCalling?: boolean;
    enableGroups?: boolean;
    enableMediaCards?: boolean;
    enableMessaging?: boolean;
    enableScreenSharing?: boolean;
    enableVideo?: boolean;
    groupsMode?: string;
    incomingCallRoute?: string;
    isEnabled: boolean;
}

// @public
export type SlackChannel = Channel & {
    channelName: "SlackChannel";
    properties?: SlackChannelProperties;
};

// @public
export interface SlackChannelProperties {
    clientId?: string;
    clientSecret?: string;
    isEnabled: boolean;
    readonly isValidated?: boolean;
    landingPageUrl?: string;
    readonly lastSubmissionId?: string;
    readonly redirectAction?: string;
    readonly registerBeforeOAuthFlow?: boolean;
    scopes?: string;
    signingSecret?: string;
    verificationToken?: string;
}

// @public
export type SmsChannel = Channel & {
    channelName: "SmsChannel";
    properties?: SmsChannelProperties;
};

// @public
export interface SmsChannelProperties {
    accountSID: string;
    authToken?: string;
    isEnabled: boolean;
    isValidated?: boolean;
    phone: string;
}

// @public
export type TelegramChannel = Channel & {
    channelName: "TelegramChannel";
    properties?: TelegramChannelProperties;
};

// @public
export interface TelegramChannelProperties {
    accessToken?: string;
    isEnabled: boolean;
    isValidated?: boolean;
}

// @public
export type WebChatChannel = Channel & {
    channelName: "WebChatChannel";
    properties?: WebChatChannelProperties;
};

// @public
export interface WebChatChannelProperties {
    sites?: WebChatSite[];
    readonly webChatEmbedCode?: string;
}

// @public
export interface WebChatSite {
    isEnabled: boolean;
    isWebchatPreviewEnabled: boolean;
    readonly key?: string;
    readonly key2?: string;
    readonly siteId?: string;
    siteName: string;
}

// (No @packageDocumentation comment for this package)

```
