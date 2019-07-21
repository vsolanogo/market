import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header } from './HeaderView';

const mapStateToProps = (state, props) => ({
  userLoggedIn: state.viewer.user !== null,
  path: props.location.pathname,
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    null,
  ),
)(Header);
