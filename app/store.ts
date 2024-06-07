// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../app/Features/counter/counterSlice';
import stateReducer from '../app/Features/state/stateSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    state:stateReducer,
  },
});
