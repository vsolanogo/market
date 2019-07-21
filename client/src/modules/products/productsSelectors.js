import { createSelector } from 'reselect';
import _ from 'lodash';

const getProductsId = (state) => state.products.ids;
const getProductsEntities = (state) => state.entities.products;
const getCurrentProductId = (state, props) => props.match.params.id;
const getUsersEntities = (state) => state.entities.users;

export const getLatestProducts = createSelector(
  [getProductsId, getProductsEntities],
  (productsId, products) => productsId.map((i) => products[i]),
);

export const getCurrentProductById = createSelector(
  [getProductsEntities, getCurrentProductId],
  (products, productId) => products[productId],
);

export const getOwnerIdOfProduct = createSelector(
  [getCurrentProductById],
  (product) =>
    _.get(product, 'ownerId', null)
      ? _.get(product, 'ownerId', null)
      : _.get(product, 'owner', null),
);

export const getOwnerOfProduct = createSelector(
  [getOwnerIdOfProduct, getUsersEntities],
  (productId, users) => users[productId],
);
