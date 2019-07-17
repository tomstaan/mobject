import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./../style/App.module.css";
import "./../style/Dashboard.module.css";
import Form from "./Form";
import Tasks from "./Tasks";
import Panel from "./Panel";

//{ this.props.state.showForm ?  : "" }

export default function Dashboard() {
  return (
    <Fragment>
      <div className="add-task-container">
        <Form />
      </div>
      <Panel />

      <Tasks />
    </Fragment>
  );
}
