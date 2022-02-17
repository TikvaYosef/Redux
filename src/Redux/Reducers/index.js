import { combineReducers } from "redux";
import todoreducer from "./todos";
import userReducer from "./Users";

const globalReducer = combineReducers({
    todos: todoreducer,
    users: userReducer,
})

export default globalReducer;