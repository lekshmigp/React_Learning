import { configureStore } from '@reduxjs/toolkit';
import bookmarkReducer from '../features/bookmarks/bookmarkSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    bookmarks: bookmarkReducer,
    user: userReducer, 
  }, 
}); 