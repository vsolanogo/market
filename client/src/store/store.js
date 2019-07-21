import { applyMiddleware, createStore, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../modules/index';

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    devToolsEnhancer(),
  ),
);
