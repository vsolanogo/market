import {
  compose,
  branch,
  renderComponent,
  withProps,
} from 'recompose';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authOperations } from '../../modules/auth/index';
import { LoginForm } from './LoginFormView';

const mapStateToProps = (state) => ({
  isLoading: state.auth.login.isLoading,
  isError: state.auth.login.isError,
  error: state.auth.login.error,
  userLoggedIn: state.viewer.user !== null,
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { onLogin: authOperations.login },
  ),
  withProps((props) => {
    const modalIsOpen = _.get(
      props,
      'location.state.modalIsOpen',
      false,
    );
    const locateToAfterLoggingIn = _.get(
      props,
      'location.state.from.pathname',
      '/',
    );
    return { ...props, locateToAfterLoggingIn, modalIsOpen };
  }),
)(LoginForm);
