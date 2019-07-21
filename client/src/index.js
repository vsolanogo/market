import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WebFont from 'webfontloader';
import { ModalProvider } from 'styled-react-modal';
import { Provider, connect } from 'react-redux';
import store from './store/store';
import Router from './scenes/router';
import { compose, lifecycle } from 'recompose';
import * as appOperations from './modules/app/appOperations';

WebFont.load({
  google: {
    families: [
      'Rubik',
      'Helvetica',
      'sans-serif',
      'Montserrat',
      'Open Sans',
    ],
  },
});

const App = () => {
  return <Router />;
};

const AppEnhanced = compose(
  connect(
    null,
    { onInit: appOperations.init },
  ),
  lifecycle({
    componentDidMount() {
      this.props.onInit();
    },
  }),
)(App);

ReactDOM.render(
  <Provider store={store}>
    <ModalProvider>
      <AppEnhanced />
    </ModalProvider>
  </Provider>,
  document.getElementById('root'),
);
