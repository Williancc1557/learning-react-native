import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    tokens: {
      accessToken: null,
      refreshToken: null,
    },

    rememberAccount: {
      email: null,
      password: null,
      enabled: false,
    },
  },
  reducers: {
    updateTokens: (state, value) => {
      state.tokens = {...state.tokens, ...value.payload};
    },

    rememberAccount: (state, value) => {
      state.rememberAccount = {...state.rememberAccount, ...value.payload};
    },
  },
});

export const {updateTokens, rememberAccount} = authSlice.actions;

export default authSlice.reducer;
