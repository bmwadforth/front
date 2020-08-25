import { configureStore } from '@reduxjs/toolkit';
import articleSummaryReducer from '../slices/articleSummarySlice';
import articleReducer from '../slices/articleSlice';
import metaReducer from '../slices/metaSlice';

export default configureStore({
  reducer: {
    article: articleReducer,
    articleSummary: articleSummaryReducer,
    meta: metaReducer,
  },
});
