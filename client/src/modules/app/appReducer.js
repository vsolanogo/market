import { handleActions } from '@letapp/redux-actions';
import * as appActions from './appActions';

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
};

export default handleActions(
  {
    [appActions.initialization.start]: (state, action) => ({
      ...state,
      isLoading: true,
      error: null,
      isError: false,
    }),
    [appActions.initialization.success]: (state, action) => ({
      ...state,
      isLoading: false,
    }),
    [appActions.initialization.error]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
      isError: true,
    }),
  },
  initialState,
);
