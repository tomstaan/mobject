//Actions -> Types  -> Reducer
import { TOGGLE_TASK_FORM } from "../actions/types";

//Sets Initial State
const initialState = {
   toggleTask:false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_TASK_FORM:
      return {
        ...state,
        toggleTask: !state.toggleTask
      };
    default:
      return {
        ...state
      };
  }
}
