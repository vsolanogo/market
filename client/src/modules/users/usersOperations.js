import * as usersActions from './usersActions';
import { User } from '../../api/api';
import { normalize, schema } from 'normalizr';

const userSchema = new schema.Entity('users');

export function fetch(id) {
  return async (dispatch) => {
    try {
      dispatch(usersActions.fetch.start());

      const res = await User.getUser(id);

      const normalized = normalize(res.data, userSchema);

      dispatch(usersActions.fetch.success(normalized));
    } catch (err) {
      console.error(err);
      dispatch(usersActions.fetch.error(err.message));
    }
  };
}
