import { configureStore } from '@reduxjs/toolkit';
import articleSummaryReducer from '../slices/articleSummarySlice';
import articleReducer from '../slices/articleSlice';
import metaReducer from '../slices/metaSlice';
import projectSummaryReducer from '../slices/projectSummarySlice';

export default configureStore({
  reducer: {
    article: articleReducer,
    articleSummary: articleSummaryReducer,
    projectSummary: projectSummaryReducer,
    meta: metaReducer,
  },
});
