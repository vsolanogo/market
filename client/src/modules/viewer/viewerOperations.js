import { normalize, schema } from 'normalizr';
import * as viewerActions from './viewerActions';
import { Viewer, Auth } from '../../api/api';

const userSchema = new schema.Entity('users');

export function fetchViewer() {
  return async (dispatch) => {
    try {
      dispatch(viewerActions.fetchViewer.start());

      const res = await Viewer.get();

      const normalized = normalize(res.data, userSchema);

      dispatch(viewerActions.fetchViewer.success(normalized));
    } catch (err) {
      console.error(err);
      dispatch(viewerActions.fetchViewer.error(err.message));
    }
  };
}

export function deleteViewer() {
  return (dispatch) => {
    Auth.logout();
    dispatch(viewerActions.deleteViewer());
  };
}
