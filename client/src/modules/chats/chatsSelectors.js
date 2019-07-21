import { createSelector } from 'reselect';
import _ from 'lodash';

const getChatIds = (state) => state.chats.ids;
const getChatsEntities = (state) => state.entities.chats;
const getProductsEntities = (state) => state.entities.products;
const getMessagesEntities = (state) => state.entities.messages;

export const getChats = createSelector(
  [getChatIds, getChatsEntities],
  (chatsIds, chats) => chatsIds.map((i) => chats[i]),
);

export const getChatsWithItemNames = createSelector(
  [getChats, getProductsEntities],
  (chats, products) =>
    chats.map((i) => ({
      ...i,
      itemName: products[i.productId].title,
    })),
);

export const getChatsWithItemNamesLastMessageTextTime = createSelector(
  [getChatsWithItemNames, getMessagesEntities],
  (chats, messages) =>
    chats.map((i) => ({
      ...i,
      lastMessageText: _.get(messages[i.lastMessage], 'text', null),
      lastMessageCreatedTime: _.get(
        messages[i.lastMessage],
        'createdAt',
        null,
      ),
    })),
);
