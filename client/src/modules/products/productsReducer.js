import { handleActions } from '@letapp/redux-actions';
import * as productsActions from './productsActions';

const initialState = {
  ids: [],
  fetchProduct: {
    isLoading: false,
    isError: false,
    error: null,
  },
  fetch: {
    isLoading: false,
    isError: false,
    error: null,
  },
  post: {
    isLoading: false,
    isError: false,
    error: null,
  },
};

export default handleActions(
  {
    [productsActions.fetch.start]: (state, action) => ({
      ...state,
      fetch: {
        ...state.fetch,
        isLoading: true,
        isError: false,
        error: null,
      },
    }),
    [productsActions.fetch.success]: (state, action) => ({
      ...state,
      ids: action.payload.result,
      fetch: {
        ...state.fetch,
        isLoading: false,
      },
    }),
    [productsActions.fetch.error]: (state, action) => ({
      ...state,
      fetch: {
        ...state.fetch,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),

    [productsActions.post.start]: (state, action) => ({
      ...state,
      post: {
        ...state.post,
        isLoading: true,
        isError: false,
        error: null,
      },
    }),
    [productsActions.post.success]: (state, action) => ({
      ...state,
      post: {
        ...state.post,
        isLoading: false,
      },
    }),
    [productsActions.post.error]: (state, action) => ({
      ...state,
      post: {
        ...state.post,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),

    [productsActions.fetchProduct.start]: (state, action) => ({
      ...state,
      fetchProduct: {
        ...state.fetchProduct,
        isLoading: true,
        isError: false,
        error: null,
      },
    }),
    [productsActions.fetchProduct.success]: (state, action) => ({
      ...state,
      fetchProduct: {
        ...state.fetchProduct,
        isLoading: false,
      },
    }),
    [productsActions.fetchProduct.error]: (state, action) => ({
      ...state,
      fetchProduct: {
        ...state.fetchProduct,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  },
  initialState,
);
