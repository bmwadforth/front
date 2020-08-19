import { configureStore } from '@reduxjs/toolkit';
import articleReducer from '../slices/articleSlice';

export default configureStore({
  reducer: {
    articles: articleReducer,
  },
});