/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import foodList from '../data/foodList.json';

const foodSlice = createSlice({
  name: 'groceries',
  initialState: {
    foodList,
  },
  reducers: {
    addFoodSuccess: (state, action) => {
      state.foodList.push(action.payload);
    },
    responcibilitySuccess: (state, action) => {
      state.foodList.responsibleUser = action.payload;
    },
  },
});

export default foodSlice.reducer;
export const { addFoodSuccess, responcibilitySuccess } = foodSlice.actions;
