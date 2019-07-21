import { handleActions } from '@letapp/redux-actions';
import * as chats from './chatsActions';

const initialState = {
  ids: [],
  createChat: {
    isLoading: false,
    isError: false,
    error: false,
  },
  fetchChats: {
    isLoading: false,
    isError: false,
    error: false,
  },
};

export default handleActions(
  {
    [chats.createChat.start]: (state, action) => ({
      ...state,
      createChat: {
        ...state.createChat,
        isLoading: true,
        isError: false,
        error: null,
      },
    }),
    [chats.createChat.success]: (state, action) => ({
      ...state,
      createChat: {
        ...state.createChat,
        isLoading: false,
      },
    }),
    [chats.createChat.error]: (state, action) => ({
      ...state,
      createChat: {
        ...state.createChat,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),

    [chats.fetchChats.start]: (state, action) => ({
      ...state,
      fetchChats: {
        ...state.fetchChats,
        isLoading: true,
        isError: false,
        error: null,
      },
    }),
    [chats.fetchChats.success]: (state, action) => ({
      ...state,
      ids: action.payload.result,
      fetchChats: {
        ...state.fetchChats,
        isLoading: false,
      },
    }),
    [chats.fetchChats.error]: (state, action) => ({
      ...state,
      fetchChats: {
        ...state.fetchChats,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  },
  initialState,
);
