import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import globalReducer from "./Reducers/index";

const middleware = [thunk];
const store = createStore(globalReducer, {
    todos: [
        { title: "todo_first", iscomplited: true },
        { title: "todo_second", iscomplited: false },
    ]
},
    compose(applyMiddleware(...middleware))
);

export default store;