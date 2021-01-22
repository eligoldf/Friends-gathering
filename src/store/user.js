/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    activeUser: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.activeUser = action.payload;
    },
    logoutSuccess: (state) => {
      state.activeUser = null;
    },
  },
});

export default userSlice.reducer;
export const { loginSuccess, logoutSuccess } = userSlice.actions;
