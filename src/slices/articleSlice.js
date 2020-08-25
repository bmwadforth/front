import { createSlice } from '@reduxjs/toolkit';
import ArticleApi from '../thunks/articleThunk';

const initialState = {
  loading: 'idle',
  data: {
    id: '',
    title: '',
    description: '',
    content: '',
    image: '',
    likes: 0,
    tags: [],
    comments: [],
    createdAt: '',
    updatedAt: '',
  },
  error: null,
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    startFetchArticles(state) {
      state.loading = 'pending';
      state.data = initialState.data;
      state.error = null;
    },
    successFetchArticles(state, action) {
      state.loading = 'idle';
      state.data = action.payload;
      state.error = null;
    },
    failFetchArticles(state, action) {
      state.loading = 'idle';
      state.data = initialState.data;
      state.error = action.payload;
    },
  },
});

/**
 * Fetches an article by ID
 * @param id
 * @returns {function(...[*]=)}
 */
export const fetchArticle = (id) => async (dispatch) => {
  const { startFetchArticles, successFetchArticles, failFetchArticles } = articleSlice.actions;

  dispatch(startFetchArticles());
  try {
    const articles = await ArticleApi.fetch(id);

    dispatch(successFetchArticles(articles));
  } catch (e) {
    dispatch(failFetchArticles(e));
  }
};

export const articleArticle = (state) => state.article.data;

export default articleSlice.reducer;
