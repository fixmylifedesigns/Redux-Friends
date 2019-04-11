import React from "react";
import { Route, Redirect } from "react-router-dom";

//requirements
//1. have the same api as the <Route />
//2. has to render a <Route /> and pass all the props through to it
//3. it has to check for a token, if user is authentacated then
//  render the component (with the render prop) otherwise redirect them to /login
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
