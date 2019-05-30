import axios from "axios";

import { GET_OBJECTS } from "./types";

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