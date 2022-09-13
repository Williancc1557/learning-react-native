import axios from 'axios';
import {
  CreateAccessTokenInput,
  CreateAccessTokenOutput,
  GetTokenInfoInput,
  GetTokenInfoOutput,
  IsValidAccessTokenInput,
  SaveUserInput,
  SaveUserOutput,
  SignInInput,
  SignInOutput,
} from './models';

export const saveUser = async (
  input: SaveUserInput,
): Promise<SaveUserOutput> => {
  try {
    const response = await axios.post(
      'http://127.0.1.1:8080/api/auth/sign-up',
      input,
    );

    return {
      statusCode: response.status,
      body: response.data,
    };
  } catch (err: any) {
    return {
      statusCode: err.response.status,
      body: err.response.data,
    };
  }
};

export const signIn = async (input: SignInInput): Promise<SignInOutput> => {
  try {
    const response = await axios.post(
      'http://127.0.1.1:8080/api/auth/sign-in',
      input,
    );

    return {
      body: {
        refreshToken: response.data.refreshToken,
      },
      statusCode: response.status,
    };
  } catch (err: any) {
    return {
      statusCode: err.response.status,
      body: err.response.data,
    };
  }
};

export const getTokenInfo = async (
  input: GetTokenInfoInput,
): Promise<GetTokenInfoOutput> => {
  try {
    const response = await axios.get(
      'http://127.0.1.1:8080/api/auth/token-info',
      {
        headers: {accesstoken: input.accessToken},
      },
    );

    return {
      body: response.data,

      statusCode: response.status,
    };
  } catch (err: any) {
    return {
      statusCode: err.response.status,
      body: err.response.data,
    };
  }
};

export const isValidAccessToken = async (
  input: IsValidAccessTokenInput,
): Promise<boolean> => {
  const {statusCode} = await getTokenInfo(input);

  return statusCode === 200;
};

export const createAccessToken = async (
  input: CreateAccessTokenInput,
): Promise<CreateAccessTokenOutput> => {
  try {
    const response = await axios.post(
      'http://127.0.1.1:8080/api/auth/refresh-token',
      {},
      {headers: {refreshtoken: input.refreshToken}},
    );

    return {
      body: response.data,
      statusCode: response.status,
    };
  } catch (err: any) {
    return {
      statusCode: err.response.status,
      body: err.response.data,
    };
  }
};
