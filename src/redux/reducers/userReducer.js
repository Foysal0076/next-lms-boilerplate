import { FETCH_USER_INFO, UPDATE_USER_INFO } from "../reduxConstants"

const userReducer = (state = { userInfo: null }, action) => {
    switch (action.type) {
        case FETCH_USER_INFO:
            return { userInfo: action.payload }

        case UPDATE_USER_INFO:
            return { userInfo: action.payload }

        default:
            return state
    }
}

export default userReducer