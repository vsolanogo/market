import socket from 'socket.io-client';

class SocketApi {
  init(token) {
    this.socket = socket('/', {
      query: {
        token,
      },
      transports: ['websocket'],
    });

    this.socket.on('connect', () => {
      console.log('Connected to server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    this.socket.on('error', (error) => {
      console.log({ error });
    });
  }

  handleMessages(handler) {
    this.socket.on('message', (message) => {
      handler(JSON.parse(message));
    });
  }
}
export default new SocketApi();
