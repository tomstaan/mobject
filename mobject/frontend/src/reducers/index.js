import { combineReducers } from "redux";
import tasks from "./tasks";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import visible from "./visible";

//Combines reducers

export default combineReducers({
  tasks,
  errors,
  messages,
  auth,
  visible
});
