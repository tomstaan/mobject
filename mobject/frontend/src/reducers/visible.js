//Actions -> Types  -> Reducer
import { SHOW_TASK_FORM, HIDE_TASK_FORM } from "../actions/types";

//Sets Initial State
const initialState = {
    visible: [
        {visible: false}
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_TASK_FORM:
            return (state = action.payload);
        case HIDE_TASK_FORM:
            return (state = false);
        default:
            return false;
    }
}
