import React from "react";
import { Redirect, Route } from "react-router-dom";
import axios from "axios";
import cookie from "react-cookies";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props =>
        axios
          .get("/api/auth/session/", cookie.load("connect.sid"))
          .then(res => {
            if (res.status === 200) {
              <Component {...props} />;
            } else {
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: props.location }
                }}
              />;
            }
          })
      // .catch(err => this.setState({ loading: false }));
    }
  />
);
