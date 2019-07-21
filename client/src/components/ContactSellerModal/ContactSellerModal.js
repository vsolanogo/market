import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ContactSellerModalView } from './ContactSellerModalView';
import { chatsOperations } from '../../modules/chats/index';
import { productsSelectors } from '../../modules/products/index';

const mapStateToProps = (state, props) => ({
  owner: productsSelectors.getOwnerOfProduct(state, props),
  productId: props.match.params.id,
  userLoggedIn: state.viewer.user !== null,
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { onCreateChat: chatsOperations.createChat },
  ),
)(ContactSellerModalView);
