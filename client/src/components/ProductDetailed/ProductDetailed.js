import {
  compose,
  lifecycle,
  withStateHandlers,
  withProps,
} from 'recompose';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import { ProductDetailed } from './ProductDetailedView';

import {
  productsOperations,
  productsSelectors,
} from '../../modules/products/index';

import { usersOperations } from '../../modules/users/index';

const mapStateToProps = (state, props) => ({
  product: productsSelectors.getCurrentProductById(state, props),
  ownerId: productsSelectors.getOwnerIdOfProduct(state, props),
  owner: productsSelectors.getOwnerOfProduct(state, props),
  isLoading: state.products.fetchProduct.isLoading,
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    {
      onFetchProduct: productsOperations.fetchProduct,
      onFetchUser: usersOperations.fetch,
    },
  ),
  lifecycle({
    componentDidMount() {
      if (!this.props.product) {
        this.props.onFetchProduct(this.props.match.params.id);
      } else if (!this.props.owner && this.props.product) {
        this.props.onFetchUser(this.props.product.ownerId);
      }
    },
    componentDidUpdate(nextProps) {
      if (nextProps.ownerId !== this.props.ownerId) {
        this.props.onFetchUser(this.props.ownerId);
      }
    },
  }),
  withStateHandlers(
    (props) => _.get(props, 'location.state', false),
    {
      toggleModal: (state, props) => () => ({
        modalIsOpen: !state.modalIsOpen,
      }),
    },
  ),
)(ProductDetailed);
