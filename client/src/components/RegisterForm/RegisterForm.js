import { compose, branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';
import { authOperations } from '../../modules/auth/index';
import {
  RedirectIfRegisterSuccess,
  RegisterForm,
} from './RegisterFormView';

const mapStateToProps = (state) => ({
  isLoading: state.auth.register.isLoading,
  isError: state.auth.register.isError,
  error: state.auth.register.error,
  userHasRegistered: state.viewer.user !== null,
});

export default compose(
  connect(
    mapStateToProps,
    { onRegister: authOperations.register },
  ),
  branch(
    ({ userHasRegistered }) => userHasRegistered,
    renderComponent(RedirectIfRegisterSuccess),
  ),
)(RegisterForm);
