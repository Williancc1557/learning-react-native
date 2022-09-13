export interface SaveUserInput {
  name: string;
  email: string;
  password: string;
}

export interface SaveUserOutput {
  statusCode: number;
  body: {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  };
}

export interface SignInInput {
  email: string;
  password: string;
}

export interface SignInOutput {
  statusCode: number;
  body: {
    refreshToken: string;
  };
}

export interface GetTokenInfoInput {
  accessToken: string;
}

export interface GetTokenInfoOutput {
  body: {
    accountId: string;
    sub: string;
    iat: number;
    exp: number;
  };
  statusCode: number;
}

export interface IsValidAccessTokenInput {
  accessToken: string;
}

export interface CreateAccessTokenInput {
  refreshToken: string;
}

export interface CreateAccessTokenOutput {
  body: {
    expiresIn: number;
    accessToken: string;
  };
  statusCode: number;
}
