import { handleActions } from '@letapp/redux-actions';
import * as viewerActions from './viewerActions';

const initialState = {
  fetchViewer: {
    isLoading: false,
    isError: false,
    error: null,
  },
  user: null,
};

export default handleActions(
  {
    [viewerActions.fetchViewer.start]: (state, action) => ({
      ...state,
      isLoading: {
        ...state.fetchViewer,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [viewerActions.fetchViewer.success]: (state, action) => ({
      ...state,
      isLoading: {
        ...state.fetchViewer,
        isLoading: false,
      },
      user: action.payload.result,
    }),
    [viewerActions.fetchViewer.error]: (state, action) => ({
      ...state,
      isLoading: {
        ...state.fetchViewer,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
    [viewerActions.deleteViewer]: (state, action) => ({
      ...state,
      user: null,
    }),
  },
  initialState,
);
