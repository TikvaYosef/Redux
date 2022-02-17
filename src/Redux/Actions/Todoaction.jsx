import { todoTypes } from "../types";

export const addNewTodo = (text) =>
    (dispatch) => {
        const todo = { title: text, iscomplited: false };
        dispatch({ type: todoTypes.ADD_TODO, payload: todo })
    }
