import React, { Fragment } from "react";
import Form from "./Form";
import Tasks from "./Tasks";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Tasks />
    </Fragment>
  );
}
