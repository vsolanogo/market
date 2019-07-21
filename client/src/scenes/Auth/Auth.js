import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';

export default function Auth() {
  return (
    <Switch>
      <Route path="/auth/register" component={Register} />
      <Route path="/auth/login" component={Login} />
      <Redirect from={'/auth'} to={'/'} />
    </Switch>
  );
}
