import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import feedReducer from './feedSlice';
import marketReducer from './marketSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    feed: feedReducer,
    market: marketReducer,
  },
});
