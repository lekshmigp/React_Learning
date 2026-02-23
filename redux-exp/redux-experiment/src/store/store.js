// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import bookmarkReducer from './slices/bookmarkslice';
import userReducer from './slices/userSlice'; 

export const store = configureStore({
  reducer: {
    bookmarks: bookmarkReducer,
    user:userReducer,
  },
});