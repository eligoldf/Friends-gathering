import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './user';
import grocceries from './grocceries';

const reducer = combineReducers({
  user,
  grocceries,
});

const store = configureStore({
  reducer,
});

export default store;
