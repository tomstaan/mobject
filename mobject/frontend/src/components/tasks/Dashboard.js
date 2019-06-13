import React, { Fragment } from "react";
import "./../style/App.module.css";
import "./../style/Dashboard.module.css";
import Form from "./Form";
import Tasks from "./Tasks";

export default function Dashboard() {
  return (
    <Fragment>
      <div className="add-task-container">
        <Form />
      </div>
      <Tasks />
    </Fragment>
  );
}
