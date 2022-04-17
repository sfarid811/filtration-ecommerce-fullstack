import { configureStore } from '@reduxjs/toolkit';
import allBlogsSlice from './features/allBlogs/allBlogsSlice';
export const store = configureStore({
  reducer: {
    allBlogs: allBlogsSlice,
  },
});