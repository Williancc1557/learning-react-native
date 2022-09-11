import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    accessToken: '',
    refreshToken: '',
  },
  reducers: {
    updateAccessToken: (state, value) => {
      state.accessToken = value.payload;
    },

    updateRefreshToken: (state, value) => {
      state.refreshToken = value.payload;
    },
  },
});

export const {updateAccessToken, updateRefreshToken} = userSlice.actions;

export default userSlice.reducer;
