import { configureStore } from '@reduxjs/toolkit';
import articleSummaryReducer from '../slices/articleSummarySlice';
import metaReducer from '../slices/metaSlice';

export default configureStore({
  reducer: {
    articleSummary: articleSummaryReducer,
    meta: metaReducer,
  },
});
