import { configureStore } from '@reduxjs/toolkit';
import articleReducer from '../slices/articleSlice';
import metaReducer from '../slices/metaSlice';

export default configureStore({
  reducer: {
    articles: articleReducer,
    meta: metaReducer,
  },
});
