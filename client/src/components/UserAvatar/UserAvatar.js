import { compose, pure, withProps, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  viewerSelectors,
  viewerOperations,
} from '../../modules/viewer/index';
import { UserAvatar } from './UserAvatarView';

const colors = [
  '#B03060',
  '#FE9A76',
  '#FFD700',
  '#32CD32',
  '#016936',
  '#008080',
  '#0E6EB8',
  '#EE82EE',
  '#B413EC',
  '#FF1493',
  '#A52A2A',
  '#A0A0A0',
];

const mapStateToProps = (state) => ({
  viewer: viewerSelectors.getViewer(state),
  viewerInitials: viewerSelectors.getViewerInitials(state),
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { onLogout: viewerOperations.deleteViewer },
  ),
  withHandlers({
    handleLogout: (state, props) => () => {
      state.history.push('/');
      state.onLogout();
    },
  }),
  withProps({
    bgcolor: colors[Math.floor(Math.random() * colors.length)],
  }),
  pure,
)(UserAvatar);
