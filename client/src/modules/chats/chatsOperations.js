import { normalize, schema } from 'normalizr';
import * as chatsActions from './chatsActions';
import { Chat } from '../../api/api';

const productsSchema = new schema.Entity('products');
const participantsSchema = new schema.Entity('users');
const messagesSchema = new schema.Entity('messages', undefined, {
  idAttribute: (entity) => entity.id + '-' + entity.chatId,
});

const chatsSchema = new schema.Entity('chats', {
  lastMessage: messagesSchema,
  product: productsSchema,
  participants: [participantsSchema],
});

export function createChat(productId, message) {
  return async (dispatch) => {
    try {
      dispatch(chatsActions.createChat.start());

      const { data } = await Chat.createChat(productId);

      dispatch(chatsActions.createChat.success());
    } catch (err) {
      console.error(err);
      dispatch(chatsActions.createChat.error(err.message));
    }
  };
}

export function getChats() {
  return async (dispatch) => {
    try {
      dispatch(chatsActions.fetchChats.start());

      const { data } = await Chat.fetchChats();

      const normalized = normalize(data, [chatsSchema]);

      dispatch(chatsActions.fetchChats.success(normalized));
    } catch (err) {
      console.error(err);
      dispatch(chatsActions.fetchChats.error(err.message));
    }
  };
}
