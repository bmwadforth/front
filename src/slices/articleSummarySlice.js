import { createSlice } from '@reduxjs/toolkit';
import ArticlesApi from '../thunks/articleSummaryThunk';

const initialState = {
  loading: 'idle',
  data: [],
  error: null,
};

export const articleSummarySlice = createSlice({
  name: 'articleSummary',
  initialState,
  reducers: {
    startFetchArticles(state) {
      state.loading = 'pending';
      state.data = [];
      state.error = null;
    },
    successFetchArticles(state, action) {
      state.loading = 'idle';
      state.data = action.payload;
      state.error = null;
    },
    failFetchArticles(state, action) {
      state.loading = 'idle';
      state.data = [];
      state.error = action.payload;
    },
  },
});

/**
 * Used to fetch redirect URLs for oauth2 providers
 * @returns {function(...[*]=)}
 */
export const fetchArticles = () => async (dispatch) => {
  const { startFetchArticles, successFetchArticles, failFetchArticles } = articleSummarySlice.actions;

  dispatch(startFetchArticles());
  try {
    const articles = await ArticlesApi.fetch();

    dispatch(successFetchArticles(articles));
  } catch (e) {
    dispatch(failFetchArticles(e));
  }
};

export const selectArticles = (state) => state.articleSummary.data;

export default articleSummarySlice.reducer;
