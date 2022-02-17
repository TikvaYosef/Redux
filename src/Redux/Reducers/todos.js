import { todoTypes } from "../types";

const todoreducer = (state = {}, action) => {
    const { type, payload } = action
    switch (type) {
        case todoTypes.ADD_TODO:
            return [...state, payload]

        default:
           return state;
    }

}

export default todoreducer;