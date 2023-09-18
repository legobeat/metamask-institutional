interface IEnvironment {
  refreshTokenUrl: string;
  name: string;
  displayName: string;
  enabled: boolean;
  websocketApiUrl: string;
  apiBaseUrl: string;
  iconUrl: string;
  isNoteToTraderSupported: boolean;
}

export interface IJsonRpcCustodian {
  id: string;
  clientId: string;
  name: string;
  displayName: string;
  iconUrl: string;
  website: string;
  enabled: boolean;
  apiBaseUrl: string;
  issuerClaim: string;
  jwksUrl: string;
  refreshTokenUrl: string;
  websocketApiUrl: string;
  isNoteToTraderSupported: boolean;
  environments: IEnvironment[];
}
