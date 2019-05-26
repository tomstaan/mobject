import { GET_OBJECTS } from '../actions/types.js';

const initialState = {
    objects: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_OBJECTS:
            return {
                ...state,
                objects: action.payload
            };
        default:
            return state;
    }
}