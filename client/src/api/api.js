import axios from 'axios';
import SocketApi from './SocketApi';

const urls = {
  login: '/api/auth/login',
  register: '/api/auth/register',
  getViewer: '/api/account/user',
  postProducts: '/api/products',
  getProducts: '/api/products/latest',
  product: '/api/products',
  upload: '/api/upload/images',
  userProducts: (userId) => `/api/users/${userId}/products`,
  createChat: (productId) => `/api/products/${productId}/createChat`,
  getChats: '/api/chats',
  chatMessages: (chatId) => `/api/chats/${chatId}/messages`,
  getUser: (userId) => `/api/users/${userId}`,
};

export const Auth = {
  _token: null,

  get isLoggedIn() {
    this.init();
    return this._token;
  },

  setToken(token) {
    this._token = token;

    this._storeToken();

    this._setTokenToAxios(token);
  },

  init() {
    try {
      const token = JSON.parse(window.localStorage.getItem('token'));
      this._token = token;
      this._setTokenToAxios(token);
      SocketApi.init(token);
    } catch (err) {
      console.error(err);
    }
  },

  login(body) {
    return axios.post(urls.login, body);
  },

  register(body) {
    return axios.post(urls.register, body);
  },

  logout() {
    this._token = null;
    try {
      window.localStorage.removeItem('token');
    } catch (err) {
      console.error(err);
    }
    axios.defaults.headers.common.Authorization = null;
  },

  _storeToken() {
    try {
      window.localStorage.setItem(
        'token',
        JSON.stringify(this._token),
      );
    } catch (err) {
      console.error(err);
    }
  },

  _setTokenToAxios(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};

export const Viewer = {
  get() {
    return axios.get(urls.getViewer);
  },
};

export const User = {
  getUser(id) {
    return axios.get(urls.getUser(id));
  },
};

export const Products = {
  get() {
    return axios.get(urls.getProducts);
  },
  post(body) {
    return axios.post(urls.postProducts, body);
  },
  fetchProduct(id) {
    return axios.get(`${urls.product}/${id}`);
  },
  userProducts(id) {
    return axios.get(urls.userProducts(id));
  },
};

export const Upload = {
  post(body) {
    return axios.post(urls.upload, body);
  },
};

export const Chat = {
  createChat(productId) {
    return axios.post(urls.createChat(productId));
  },
  fetchChats() {
    return axios.get(urls.getChats);
  },
  postMessage({ chatId, message }) {
    return axios.post(urls.chatMessages(chatId), { text: message });
  },
  fetchMessages(chatId) {
    return axios.get(urls.chatMessages(chatId));
  },
};

export default function init() {
  Auth.init();
}
