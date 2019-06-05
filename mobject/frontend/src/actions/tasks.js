//Functionality actions

import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_TASKS, DELETE_TASK, ADD_TASK, GET_ERRORS } from "./types";

//Get Tasks
export const getTasks = () => dispatch => {
  axios
    .get("/api/tasks/")
    .then(res => {
      dispatch({
        type: GET_TASKS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//Delete Tasks
export const deleteTask = id => dispatch => {
  axios
    .delete(`/api/tasks/${id}/`)
    .then(res => {
      //Message for adding leads
      dispatch(createMessage({ deleteTask: "task Deleted" }));
      dispatch({
        type: DELETE_TASK,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//ADD task
export const addTask = tasks => dispatch => {
  axios
    .post("/api/tasks/", task)
    .then(res => {
      //Message for adding leads
      dispatch(createMessage({ addTask: "task Added" }));
      dispatch({
        type: ADD_TASK,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
