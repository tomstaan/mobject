import { combineReducers } from "redux";
import objects from "./objects";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  objects,
  errors,
  messages
});
