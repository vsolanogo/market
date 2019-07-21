import { normalize, schema } from 'normalizr';
import * as messagesActions from './messagesActions';
import { Chat } from '../../api/api';
import { createMessage } from './messagesCreator';

const messagesSchema = new schema.Entity('messages', undefined, {
  idAttribute: (entity) => `${entity.id}-${entity.chatId}`,
});

export function postMessage({ chatId, message }) {
  return async (dispatch, getState) => {
    const state = getState();
    const viewerId = state.viewer.user;
    const newMessage = createMessage({
      text: message,
      chatId,
      ownerId: viewerId,
    });
    const newMessageNormalized = normalize(
      newMessage,
      messagesSchema,
    );

    try {
      dispatch(
        messagesActions.postMessage.start({
          chatId,
          result: newMessageNormalized.result,
          entities: newMessageNormalized.entities,
        }),
      );

      const { data } = await Chat.postMessage({ chatId, message });

      const normalized = normalize(data, messagesSchema);
      const { result, entities } = normalized;

      dispatch(
        messagesActions.postMessage.success({
          oldMessageId: newMessageNormalized.result,
          chatId,
          result,
          entities,
        }),
      );
    } catch (err) {
      console.error(err);
      dispatch(messagesActions.postMessage.error(err.message));
    }
  };
}

export function getMessages(chatId) {
  return async (dispatch) => {
    try {
      dispatch(messagesActions.getMessages.start());

      const { data } = await Chat.fetchMessages(chatId);

      const normalized = normalize(data, [messagesSchema]);
      const { result, entities } = normalized;

      dispatch(
        messagesActions.getMessages.success({
          chatId,
          result,
          entities,
        }),
      );
    } catch (err) {
      console.error(err);
      dispatch(messagesActions.getMessages.error(err.message));
    }
  };
}

export function addMessage(message) {
  return async (dispatch) => {
    dispatch(
      messagesActions.postMessage.start({
        chatId: message.chatId,
        ...normalize(message, messagesSchema),
      }),
    );
  };
}

export function handleMessageRealTime(evt) {
  return async (dispatch) => {
    if (evt.type === 'ADD') {
      dispatch(addMessage(evt.message));
    }
  };
}
