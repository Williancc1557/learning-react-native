import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    tokens: {
      accessToken: null,
      refreshToken: null,
    },

    access: false,

    rememberAccount: {
      email: null,
      password: null,
      enabled: false,
    },
  },
  reducers: {
    updateTokens: (state, {payload}) => {
      state.tokens = {...state.tokens, ...payload};
    },

    rememberAccount: (state, {payload}) => {
      state.rememberAccount = {...state.rememberAccount, ...payload};
    },

    updateAccess: (state, {payload}) => {
      state.access = payload;
    },
  },
});

export const {updateTokens, rememberAccount, updateAccess} = authSlice.actions;

export default authSlice.reducer;
