import * as productsActions from './productsActions';
import { Products } from '../../api/api';
import { normalize, schema } from 'normalizr';

const ownersSchema = new schema.Entity('users');
const productsSchema = new schema.Entity('products', {
  owner: ownersSchema,
});

export function fetch() {
  return async (dispatch) => {
    try {
      dispatch(productsActions.fetch.start());

      const res = await Products.get();

      const normalized = normalize(res.data, [productsSchema]);

      dispatch(productsActions.fetch.success(normalized));
    } catch (err) {
      console.error(err);
      dispatch(productsActions.fetch.error(err.message));
    }
  };
}

export function post(body) {
  return async (dispatch) => {
    try {
      dispatch(productsActions.post.start());

      const res = await Products.post(body);

      // const normalized = normalize(res, productsSchema);

      dispatch(productsActions.post.success());
    } catch (err) {
      console.error(err);
      dispatch(productsActions.post.error(err.message));
    }
  };
}

export function fetchProduct(id) {
  return async (dispatch) => {
    try {
      dispatch(productsActions.fetchProduct.start());

      const res = await Products.fetchProduct(id);

      const normalized = normalize(res.data, productsSchema);

      dispatch(productsActions.fetchProduct.success(normalized));
    } catch (err) {
      console.error(err);
      dispatch(productsActions.fetchProduct.error(err.message));
    }
  };
}
