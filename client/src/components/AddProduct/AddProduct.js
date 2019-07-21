import { compose } from 'recompose';
import { connect } from 'react-redux';
import { productsOperations } from '../../modules/products/index';
import { AddProduct } from './AddProductView';

const mapStateToProps = (state) => ({});

export default compose(
  connect(
    mapStateToProps,
    { onPostProduct: productsOperations.post },
  ),
)(AddProduct);
