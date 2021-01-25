import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './user';
import grocceries from './grocceries';
import modal from './modals';

const reducer = combineReducers({
  user,
  grocceries,
  modal,
});

const store = configureStore({
  reducer,
});

export default store;
