import * as appActions from './appActions';
import { Auth } from '../../api/api';
import { fetchViewer } from '../viewer/viewerOperations';
import SocketApi from '../../api/SocketApi';
import { messagesOperations } from '../messages/index';

export function subscribeToSockets() {
  return async (dispatch) => {
    SocketApi.handleMessages((message) =>
      dispatch(messagesOperations.handleMessageRealTime(message)),
    );
  };
}

export function init() {
  return async (dispatch) => {
    try {
      dispatch(appActions.initialization.start());

      Auth.init();

      await dispatch(fetchViewer());

      dispatch(appActions.initialization.success());
      dispatch(subscribeToSockets());
    } catch (err) {
      dispatch(appActions.initialization.error(err.message));
    }
  };
}
