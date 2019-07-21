import { handleActions } from '@letapp/redux-actions';
import * as userListing from './userListingActions';

const initialState = {
  ids: [],
  fetch: {
    isLoading: false,
    isError: false,
    error: null,
  },
};

export default handleActions(
  {
    [userListing.fetch.start]: (state, action) => ({
      ...state,
      ids: [],
      fetch: {
        ...state.fetch,
        isLoading: true,
        isError: false,
        error: null,
      },
    }),
    [userListing.fetch.success]: (state, action) => ({
      ...state,
      ids: action.payload.result,
      fetch: {
        ...state.fetch,
        isLoading: false,
      },
    }),
    [userListing.fetch.error]: (state, action) => ({
      ...state,
      fetch: {
        ...state.fetch,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  },
  initialState,
);
