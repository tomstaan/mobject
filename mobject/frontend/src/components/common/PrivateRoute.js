import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (auth.loading) {
        //Spinner - Loading
        return <h2>Loading .....</h2>;
      } else if (!auth.isAuthenticated) {
        // Is Authenticated null or false return user to the login route.
        return <Redirect to="/login" />;
      } else {
        // else return props
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
