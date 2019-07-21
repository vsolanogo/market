import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import AddProduct from './AddProduct/AddProduct';
import ProductDetailed from './ProductDetailed/ProductDetailed';
import UserListings from './UserListings/UserListings';
import Chat from './Chat/Chat';
import Auth from './Auth/Auth';
import Verstka from './verstka';
import PrivateRoute from './PrivateRoute';

export const routes = {
  home: '/',
  login: '/auth/login',
  // register: '/auth/register',
};

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <PrivateRoute path="/products/add" component={AddProduct} />
        <Route path="/products/:id" component={ProductDetailed} />
        <Route path="/user/listings/:id" component={UserListings} />
        <PrivateRoute path="/chat" component={Chat} />
        <Route component={Verstka} />
      </Switch>
    </BrowserRouter>
  );
}
