import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { UserListings } from './UserListingsView';
import { userListingOperations } from '../../modules/userListing/index';

const mapStateToProps = (state, props) => ({
  user: state.entities.users[props.match.params.id],
  products: state.userListing.ids.map(
    (i) => state.entities.products[i],
  ),
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { onFetchUserProducts: userListingOperations.fetch },
  ),
  lifecycle({
    componentDidMount() {
      this.props.onFetchUserProducts(this.props.match.params.id);
    },
    componentDidUpdate(nextProps) {
      if (nextProps.match.params.id !== this.props.match.params.id) {
        this.props.onFetchUserProducts(this.props.match.params.id);
      }
    },
  }),
)(UserListings);
