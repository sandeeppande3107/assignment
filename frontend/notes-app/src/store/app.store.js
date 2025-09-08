import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { notesReducer } from "./notes/notes-reducer"
import errorReducer from "./error/error-reducer"

const rootReducer = combineReducers({ notes: notesReducer, error: errorReducer, })
export const store = configureStore({ reducer: rootReducer, })