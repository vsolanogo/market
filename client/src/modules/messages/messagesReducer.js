import { handleActions } from '@letapp/redux-actions';
import * as messagesActions from './messagesActions';

const initialState = {
  items: {},
  postMessage: {
    isLoading: false,
    isError: false,
    error: false,
  },
  fetchMessages: {
    isLoading: false,
    isError: false,
    error: false,
  },
};

export default handleActions(
  {
    [messagesActions.postMessage.start]: (
      state,
      { payload: { chatId, result } },
    ) => ({
      ...state,
      items: {
        [chatId]: (state.items[chatId] || []).concat(result),
      },
      postMessage: {
        ...state.postMessage,
        isLoading: false,
      },
    }),
    [messagesActions.postMessage.success]: (
      state,
      { payload: { chatId, result, oldMessageId } },
    ) => {
      const items = state.items[chatId]
        .filter((i) => i !== oldMessageId)
        .concat(result);

      return {
        ...state,
        items: {
          ...state.items,
          [chatId]: items,
        },
        postMessage: {
          ...state.postMessage,
          isLoading: false,
        },
      };
    },
    [messagesActions.postMessage.error]: (state, action) => ({
      ...state,
      postMessage: {
        ...state.postMessage,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),

    [messagesActions.getMessages.start]: (state, action) => ({
      ...state,
      fetchMessages: {
        ...state.fetchMessages,
        isLoading: true,
        isError: false,
        error: null,
      },
    }),
    [messagesActions.getMessages.success]: (
      state,
      { payload: { chatId, result } },
    ) => {
      return {
        ...state,
        items: { [chatId]: result.reverse() },
        fetchMessages: {
          ...state.fetchMessages,
          isLoading: false,
        },
      };
    },
    [messagesActions.getMessages.error]: (state, action) => ({
      ...state,
      fetchMessages: {
        ...state.fetchMessages,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  },
  initialState,
);
