import axios from 'axios';

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

export const signIn = async (input: SignInInput): Promise<SignInOutput> => {
  try {
    console.log('executando');

    const response = await axios.post(
      'http://127.0.1.1:8080/api/auth/sign-in',
      input,
    );

    console.log(response);

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
