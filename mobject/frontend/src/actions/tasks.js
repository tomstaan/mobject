//Functionality actions

import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_TASKS, DELETE_TASK, ADD_TASK, COMPLETE_TASK } from "./types";

//Get Tasks
export const getTasks = () => (dispatch, getState) => {
  axios
    .get("/api/tasks/", tokenConfig(getState))
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
export const deleteTask = id => (dispatch, getState) => {
  axios
    .delete(`/api/tasks/${id}/`, tokenConfig(getState))
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
export const addTask = task => (dispatch, getState) => {
  axios
    .post("/api/tasks/", task, tokenConfig(getState))
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

//Delete Tasks
export const completeTask = (id, task) => (dispatch, getState) => {
  axios
    .put(`/api/tasks/${id}/`, task, tokenConfig(getState))
    .then(res => {
      //Message for adding leads
      dispatch(createMessage({ completeTask: "task Deleted" }));
      dispatch({
        type: COMPLETE_TASK,
        payload: id
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
