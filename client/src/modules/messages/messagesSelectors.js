import { createSelector } from 'reselect';
import _ from 'lodash';

const getChatsEntities = (state) => state.entities.chats;
const getCurrentChatId = (state, props) => props.match.params.id;
const getUsers = (state) => state.entities.users;
const getMessages = (state) => state.entities.messages;
const getMessagesIdsOfCurrentChat = (state, props) =>
  state.messages.items[props.match.params.id];

export const getMessagesOfCurrentChat = createSelector(
  [getMessagesIdsOfCurrentChat, getMessages],
  (messagesIds, messages) => messagesIds.map((i) => messages[i]),
);

export const getChatOwnerId = createSelector(
  [getCurrentChatId, getChatsEntities],
  (currentChatId, chats) =>
    _.get(chats[currentChatId], 'ownerId', null),
);

export const getOwnerInfo = createSelector(
  [getChatOwnerId, getUsers],
  (ownerId, users) => users[ownerId],
);

export const getChatParticipantsIds = createSelector(
  [getCurrentChatId, getChatsEntities],
  (chatId, chats) => _.get(chats[chatId], 'participants', null),
);

export const getChatParticipants = createSelector(
  [getChatParticipantsIds, getUsers],
  (participantsIds, users) => participantsIds.map((i) => users[i]),
);
