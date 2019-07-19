import { TOGGLE_TASK_FORM } from "./types";

//Show task form
export const toggleTaskForm = dispatch => {
  dispatch({
    type: TOGGLE_TASK_FORM
  });
};
