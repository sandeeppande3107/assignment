import { createSelector } from "reselect"

const errorState = state => state.error

export const selectErrorVisible = createSelector(
    [errorState],
    error => error.visible
)

export const selectErrorMessage = createSelector(
    [errorState],
    error => error.message
)