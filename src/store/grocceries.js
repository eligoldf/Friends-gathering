/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import foodList from '../data/foodList.json';
import foodResponsebilities from '../data/foodResponsebilities.json';

const foodSlice = createSlice({
  name: 'groceries',
  initialState: {
    foodList,
    foodResponsebilities,
  },
  reducers: {
    addFoodSuccess: (state, action) => {
      state.foodList.push(action.payload);
    },
    userResponseSuccess: (state, action) => {
      state.foodResponsebilities.push(action.payload);
    },
  },
});

export default foodSlice.reducer;
export const { addFoodSuccess, userResponseSuccess } = foodSlice.actions;
