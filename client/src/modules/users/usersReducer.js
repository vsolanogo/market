import { handleActions } from '@letapp/redux-actions';
import * as usersActions from './usersActions';

const initialState = {
  fetch: {
    isLoading: false,
    isError: false,
    error: null,
  },
};

export default handleActions(
  {
    [usersActions.fetch.start]: (state, action) => ({
      ...state,
      fetch: {
        ...state.fetch,
        isLoading: true,
        isError: false,
        error: null,
      },
    }),
    [usersActions.fetch.success]: (state, action) => ({
      ...state,

      fetch: {
        ...state.fetch,
        isLoading: false,
      },
    }),
    [usersActions.fetch.error]: (state, action) => ({
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
