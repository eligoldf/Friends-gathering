/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import users from '../data/users.json';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    activeUser: null,
    usersList: users,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.activeUser = action.payload;
    },
    logoutSuccess: (state) => {
      state.activeUser = null;
    },
    addUserSuccess: (state, action) => {
      state.usersList.push(action.payload);
    },
  },
});

export default userSlice.reducer;
export const { loginSuccess, logoutSuccess, addUserSuccess } = userSlice.actions;
