import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    tokens: {
      accessToken: null,
      refreshToken: null,
    },

    rememberAccount: {
      email: null,
      password: null,
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

export const {updateTokens, rememberAccount} = userSlice.actions;

export default userSlice.reducer;
