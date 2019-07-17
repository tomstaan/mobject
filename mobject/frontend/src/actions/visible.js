//Show task form
export const showTaskForm = (visible) => (dispatch) => {
    dispatch({
        type: SHOW_TASK_FORM,
        payload: visible
    });
};

//Hide task form
export const hideTaskForm = (visible) => (dispatch) => {
    dispatch({
        type: HIDE_TASK_FORM,
        payload: visible
    });
};