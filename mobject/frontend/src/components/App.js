import React, { Component, Fragment } from "react";
import "./style/App.module.css";
import "./style/Dashboard.module.css";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./layout/Header";
import Dashboard from "./tasks/Dashboard";
import Alerts from "./layout/Alerts";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

//Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <div className="cont-back">
        <div className="col-md-12">
          <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
              <Router>
                <Fragment>
                  <div className="header-back">
                    <Header />
                  </div>
                  <Alerts />
                  <Switch>
                    <PrivateRoute exact path="/" component={Dashboard} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                  </Switch>
                </Fragment>
              </Router>
            </AlertProvider>
          </Provider>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
