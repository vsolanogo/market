import { createAsyncActions } from '@letapp/redux-actions';

export const postMessage = createAsyncActions(
  'messages/POST_MESSAGE',
);
export const getMessages = createAsyncActions(
  'messages/GET_MESSAGES',
);
