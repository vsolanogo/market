import { combineReducers } from 'redux';

import app from './app/index';
import auth from './auth/index';
import viewer from './viewer/index';
import products from './products/index';
import photos from './photos/index';
import entities from './entities/index';
import userListing from './userListing/index';
import chats from './chats/index';
import messages from './messages/index';
import users from './users/index';

export default combineReducers({
  app,
  auth,
  viewer,
  products,
  photos,
  entities,
  userListing,
  chats,
  messages,
  users,
});
