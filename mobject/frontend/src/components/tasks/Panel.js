import React, { Component, Fragment } from "react";
import "./../style/App.module.css";
import "./../style/Dashboard.module.css";
import "./../style/Panel.module.css";

export default class Panel extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="panel-back">
          <div className="dash-buttons"></div>
        </div>
      </Fragment>
    );
  }
}
