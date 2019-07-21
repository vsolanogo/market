import { handleActions } from '@letapp/redux-actions';
import * as authActions from './authActions';

const initialState = {
  login: {
    isLoading: false,
    isError: false,
    error: null,
  },
  register: {
    isLoading: false,
    isError: false,
    error: null,
  },
};

export default handleActions(
  {
    [authActions.login.start]: (state, action) => ({
      ...state,
      login: {
        ...state.login,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [authActions.login.success]: (state, action) => ({
      ...state,
      login: {
        ...state.login,
        isLoading: false,
      },
    }),
    [authActions.login.error]: (state, action) => ({
      ...state,
      login: {
        ...state.login,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),

    [authActions.register.start]: (state, action) => ({
      ...state,
      register: {
        ...state.register,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [authActions.register.success]: (state, action) => ({
      ...state,
      register: {
        ...state.register,
        isLoading: false,
      },
    }),
    [authActions.register.error]: (state, action) => ({
      ...state,
      register: {
        ...state.register,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  },
  initialState,
);
