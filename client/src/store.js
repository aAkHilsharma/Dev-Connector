import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { configureStore } from '@reduxjs/toolkit';

const initialState = {};

const middleware = [thunk];

const store = configureStore(
  { reducer: rootReducer },
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
