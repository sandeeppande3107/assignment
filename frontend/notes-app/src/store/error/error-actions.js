import { HIDE_API_ERROR, SHOW_API_ERROR } from "./error-events"

export const showApiError = (message, error) => ({
    type: SHOW_API_ERROR,
    payload: { message, error }
})

export const hideApiError = () => ({
    type: HIDE_API_ERROR
})