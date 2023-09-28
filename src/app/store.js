import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../authentication/UserSlice';

export const store = configureStore({
  reducer: {
    counter: userReducer,
  },
});