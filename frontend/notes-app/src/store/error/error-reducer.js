import { HIDE_API_ERROR, SHOW_API_ERROR } from "./error-events"

const initialState = {
    visible: false,
    message: "",
    error: ""
}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_API_ERROR:
            return {
                visible: true,
                message: action.payload.message,
                error: action.payload.error
            }
        case HIDE_API_ERROR:
            return initialState
        default:
            return state
    }
}

export default errorReducer;