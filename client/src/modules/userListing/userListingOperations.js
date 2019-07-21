import { normalize, schema } from 'normalizr';
import * as userListingActions from './userListingActions';
import { usersOperations } from '../users/index';
import { Products } from '../../api/api';

const ownersSchema = new schema.Entity('users');
const productsSchema = new schema.Entity('products', {
  owner: ownersSchema,
});

export function fetch(id) {
  return async (dispatch) => {
    try {
      dispatch(userListingActions.fetch.start());

      const res = await Products.userProducts(id);

      await dispatch(usersOperations.fetch(id));

      const normalized = normalize(res.data.list, [productsSchema]);

      dispatch(userListingActions.fetch.success(normalized));
    } catch (err) {
      console.error(err);
      dispatch(userListingActions.fetch.error(err.message));
    }
  };
}
