//Functionality actions

import axios from "axios";

import { GET_OBJECTS, DELETE_OBJECT } from "./types";

//Get Objects
export const getObjects = () => dispatch => {
  axios
    .get("/api/objects/")
    .then(res => {
      dispatch({
        type: GET_OBJECTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//Delete Object
export const deleteObject = id => dispatch => {
  axios
    .delete(`/api/objects/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_OBJECT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
