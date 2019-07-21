import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Auth } from '../api/api';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Auth.isLoggedIn ? (
        <Component {...rest} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/auth/login',
            state: {
              from: props.location,
              modalIsOpen: rest.modalIsOpen,
            },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
