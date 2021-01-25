/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const modalsSlice = createSlice({
  name: 'modal',
  initialState: {
    status: 'hide',
    modalName: null,
  },
  reducers: {
    showModal(state, action) {
      state.modalName = action.payload;
      state.status = 'show';
    },
    hideModal(state, action) {
      state.modalName = action.payload;
      state.status = 'hide';
    },
  },
});

export default modalsSlice.reducer;
export const { showModal, hideModal } = modalsSlice.actions;
