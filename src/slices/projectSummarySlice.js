import { createSlice } from '@reduxjs/toolkit';
import ArticlesApi from '../thunks/articleSummaryThunk';
import ProjectsAPI from '../thunks/projectSummaryThunk';

const initialState = {
  loading: 'idle',
  data: [],
  error: null,
};

export const projectSummarySlice = createSlice({
  name: 'projectSummary',
  initialState,
  reducers: {
    startFetchProjects(state) {
      state.loading = 'pending';
      state.data = [];
      state.error = null;
    },
    successFetchProjects(state, action) {
      state.loading = 'idle';
      state.data = action.payload;
      state.error = null;
    },
    failFetchProjects(state, action) {
      state.loading = 'idle';
      state.data = [];
      state.error = action.payload;
    },
  },
});

/**
 * Fetch projects
 * @returns {function(...[*]=)}
 */
export const fetchProjects = () => async (dispatch) => {
  const { startFetchProjects, successFetchProjects, failFetchProjects } = projectSummarySlice.actions;

  dispatch(startFetchProjects());
  try {
    const projects = await ProjectsAPI.fetch();

    dispatch(successFetchProjects(projects));
  } catch (e) {
    dispatch(failFetchProjects(e));
  }
};

export const selectProjects = (state) => state.projectSummary.data;

export default projectSummarySlice.reducer;
