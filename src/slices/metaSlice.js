import { createSlice } from '@reduxjs/toolkit';
import MetaAPI from '../thunks/metaThunk';

const initialState = {
  loading: 'idle',
  data: {
    uag: '',
    ip: '',
    colo: '',
    loc: '',
  },
  error: null,
};

export const metaSlice = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    startFetchMeta(state) {
      state.loading = 'pending';
      state.data = initialState.data;
      state.error = null;
    },
    successFetchMeta(state, action) {
      state.loading = 'idle';
      state.data = action.payload;
      state.error = null;
    },
    failFetchMeta(state, action) {
      state.loading = 'idle';
      state.data = initialState.data;
      state.error = action.payload;
    },
  },
});

/**
 * Used to fetch redirect URLs for oauth2 providers
 * @returns {function(...[*]=)}
 */
export const fetchMeta = () => async (dispatch) => {
  const { startFetchMeta, successFetchMeta, failFetchMeta } = metaSlice.actions;

  dispatch(startFetchMeta());
  try {
    const meta = await MetaAPI.fetch();

    dispatch(successFetchMeta(meta));
  } catch (e) {
    dispatch(failFetchMeta(e));
  }
};

export const selectMeta = (state) => state.meta.data;

export default metaSlice.reducer;
