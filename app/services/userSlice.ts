import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    tokens: {
      accessToken: null,
      refreshToken: null,
    },
  },
  reducers: {
    updateTokens: (state, value) => {
      state.tokens = {...state.tokens, ...value.payload};
    },
  },
});

export const {updateTokens} = userSlice.actions;

export default userSlice.reducer;
