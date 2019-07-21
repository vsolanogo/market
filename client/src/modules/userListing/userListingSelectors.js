import { createSelector } from 'reselect';

const getProductsId = (state) => state.products.ids;
const getProducts = (state) => state.entities.products;

export const getLatestProducts = createSelector(
  [getProductsId, getProducts],
  (productsId, products) => productsId.map((i) => products[i]),
);
