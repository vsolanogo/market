import { handleActions, combineActions } from '@letapp/redux-actions';
import { messagesActions } from '../messages/index';

const INITIAL_STATE = {
  products: {},
  users: {},
  chats: {},
  messages: {},
};

const reducer = handleActions(
  {
    [combineActions(
      messagesActions.postMessage.start,
      messagesActions.postMessage.success,
    )]: (state, { payload: { chatId, result } }) => ({
      ...state,
      chats: {
        ...state.chats,
        [chatId]: {
          ...state.chats[chatId],
          lastMessage: result,
        },
      },
    }),
  },
  INITIAL_STATE,
);

export default function entitiesReducer(
  state = INITIAL_STATE,
  action,
) {
  let stateWithEntities = state;
  if (action.payload && action.payload.entities) {
    stateWithEntities = Object.keys(action.payload.entities).reduce(
      (accState, key) => {
        const entity = accState[key];

        accState[key] = Object.assign(
          {},
          entity,
          action.payload.entities[key],
        );

        return accState;
      },
      { ...state },
    );
  }

  return reducer(stateWithEntities, action);
}
