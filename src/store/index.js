import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './user';
import grocceries from './grocceries';
import modal from './modals';
import address from './address';

const reducer = combineReducers({
  user,
  grocceries,
  modal,
  address,
});

const store = configureStore({
  reducer,
});

export default store;
