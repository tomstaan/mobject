import { combineReducers } from "redux";
import objects from "./objects";
import errors from "./errors";

export default combineReducers({
  objects,
  errors
});
