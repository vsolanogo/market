import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Chat } from './ChatView';
import {
  chatsOperations,
  chatsSelectors,
} from '../../modules/chats/index';
import { messagesOperations } from '../../modules/messages';

const mapStateToProps = (state, props) => ({
  chatsInfo: chatsSelectors.getChatsWithItemNamesLastMessageTextTime(
    state,
  ),
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    {
      onGetChats: chatsOperations.getChats,
      onSendMessage: messagesOperations.postMessage,
    },
  ),
  lifecycle({
    componentDidMount() {
      this.props.onGetChats();
    },
  }),
)(Chat);
