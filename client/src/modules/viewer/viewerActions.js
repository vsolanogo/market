import {
  createAsyncActions,
  createAction,
} from '@letapp/redux-actions';

export const fetchViewer = createAsyncActions('viewer/FETCH_VIEWER');
export const deleteViewer = createAction('viewer/DELETE_VIEWER');
