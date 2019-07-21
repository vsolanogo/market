import { createAsyncActions } from '@letapp/redux-actions';

export const fetch = createAsyncActions('products/FETCH');
export const post = createAsyncActions('products/POST');
export const fetchProduct = createAsyncActions(
  'products/FETCH_PRODUCT',
);
