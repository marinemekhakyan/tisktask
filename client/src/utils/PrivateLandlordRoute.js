import React from "react";
import { Redirect, Route } from "react-router-dom";
import Auth from "./Auth";

export const PrivateLandlordRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (Auth.isAuthenticatedAsLandlord()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
