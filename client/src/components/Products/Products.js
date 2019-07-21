import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import {
  productsOperations,
  productsSelectors,
} from '../../modules/products/index';
import { ProductsList } from './ProductsView';

const mapStateToProps = (state) => ({
  products: productsSelectors.getLatestProducts(state),
});

export default compose(
  connect(
    mapStateToProps,
    { onFetchProducts: productsOperations.fetch },
  ),
  lifecycle({
    componentDidMount() {
      if (this.props.products.length === 0) {
        this.props.onFetchProducts();
      }
    },
  }),
)(ProductsList);
