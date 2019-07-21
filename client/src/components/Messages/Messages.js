import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Messages } from './MessagesView';
import {
  messagesOperations,
  messagesSelectors,
} from '../../modules/messages/index';

const mapStateToProps = (state, props) => ({
  chatId: props.match.params.id,
  chatParticipants: messagesSelectors.getChatParticipants(
    state,
    props,
  ),
  viewerId: state.viewer.user,
  messages: (() => {
    try {
      return messagesSelectors.getMessagesOfCurrentChat(state, props);
    } catch {
      return null;
    }
  })(),
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    {
      onSendMessage: messagesOperations.postMessage,
      onGetMessages: messagesOperations.getMessages,
    },
  ),
  lifecycle({
    componentDidMount() {
      this.props.onGetMessages(this.props.chatId);
    },
    componentDidUpdate(prevProps) {
      if (prevProps.chatId !== this.props.chatId) {
        this.props.onGetMessages(this.props.chatId);
      }
    },
  }),
)(Messages);
