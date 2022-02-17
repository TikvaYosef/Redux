import { userTypes } from "../types";



const userReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case userTypes.LOG_IN:
            return  payload

        default:
            return state
    }

}

export default userReducer;