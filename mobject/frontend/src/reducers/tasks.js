//Actions -> Types  -> Reducer
import {
  GET_TASKS,
  DELETE_TASK,
  ADD_TASK,
  COMPLETE_TASK
} from "../actions/types.js";

//Sets Initial State
const initialState = {
  tasks: []
};

//One function / Many cases
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    default:
      return state;
  }
}
