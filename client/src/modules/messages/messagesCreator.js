import uuid from 'uuid';

export const createMessage = ({ text, chatId, ownerId }) => ({
  id: uuid.v4(),
  createdAt: new Date().getTime(),
  text,
  chatId,
  ownerId,
});
