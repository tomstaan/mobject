//Actions -> Types  -> Reducer
import { GET_OBJECTS, DELETE_OBJECT, ADD_OBJECT } from "../actions/types.js";

//Sets Initial State
const initialState = {
  objects: []
};

//One function / Many cases
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_OBJECTS:
      return {
        ...state,
        objects: action.payload
      };
    case DELETE_OBJECT:
      return {
        ...state,
        objects: state.objects.filter(object => object.id !== action.payload)
      };
    case ADD_OBJECT:
      return {
        ...state,
        objects: [...state.objects, action.payload]
      };
    default:
      return state;
  }
}
6;
