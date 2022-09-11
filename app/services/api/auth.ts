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
