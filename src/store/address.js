/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    center: {
      lat: 32.109333,
      lng: 34.855499,
    },
    markers: [],
    selected: null,
    chosenAddress: '',
  },
  reducers: {
    setMarkersSucces: (state, action) => {
      console.log(action.payload);
      state.markers.push(action.payload);
    },
    setSelectedSuccess: (state, action) => {
      state.selected = action.payload;
    },
    setChosenAddresSuccess: (state, action) => {
      state.chosenAddress = action.payload;
    },
  },
});

export default addressSlice.reducer;
export const {
  setMarkersSucces, setSelectedSuccess, setChosenAddresSuccess,
} = addressSlice.actions;
