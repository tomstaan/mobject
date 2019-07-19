//Actions -> Types  -> Reducer
import { TOGGLE_TASK_FORM } from "../actions/types";

//Sets Initial State
const initialState = {
  visible: [{ showTaskForm: false }]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_TASK_FORM:
      return {
        ...state,
        visible: [...state.visible, action.payload]
      };
    default:
      return {
        ...state
      };
  }
}
