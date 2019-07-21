import * as authActions from './authActions';
import { Auth } from '../../api/api';
import { fetchViewer } from '../viewer/viewerOperations';

export function login(body) {
  return async (dispatch) => {
    try {
      dispatch(authActions.login.start());

      const res = await Auth.login(body);

      const { user, token } = res.data;

      Auth.setToken(token);
      dispatch(authActions.login.success(user));
      await dispatch(fetchViewer());
    } catch (err) {
      console.error(err);
      dispatch(authActions.login.error(err.message));
    }
  };
}

export function register(body) {
  return async (dispatch) => {
    try {
      dispatch(authActions.register.start());

      const res = await Auth.register(body);

      const { user, token } = res.data;

      Auth.setToken(token);

      dispatch(authActions.register.success(user));
      await dispatch(fetchViewer());
    } catch (err) {
      console.error(err);
      dispatch(authActions.register.error(err.message));
    }
  };
}
