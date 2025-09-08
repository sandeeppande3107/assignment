import { SHOW_API_ERROR } from "../error/error-events"
import { createNoteApi, deleteNoteApi, fetchNotesApi, updateNoteApi } from "./notes-api"
import { ADD_NOTE_FAILURE, ADD_NOTE_REQUEST, ADD_NOTE_SUCCESS, DELETE_NOTE_OPTIMISTIC, EDIT_NOTE_FAILURE, EDIT_NOTE_REQUEST, EDIT_NOTE_SUCCESS, FETCH_NOTES_FAILURE, FETCH_NOTES_REQUEST, FETCH_NOTES_SUCCESS } from "./notes-events"
import { v4 as uuidv4 } from 'uuid'

export const fetchNotes = () => async (dispatch) => {
    dispatch({ type: FETCH_NOTES_REQUEST })
    try {
        const data = await fetchNotesApi()
        dispatch({ type: FETCH_NOTES_SUCCESS, payload: data })
    } catch (err) {
        dispatch({ type: FETCH_NOTES_FAILURE, payload: err })
        dispatch({ type: SHOW_API_ERROR, payload: err })
    }
}

export const addNote = ({ title, content }) => async (dispatch) => {
    dispatch({ type: ADD_NOTE_REQUEST })
    try {
        const newNote = { id: uuidv4(), title, content }
        const data = await createNoteApi(newNote)
        dispatch({ type: ADD_NOTE_SUCCESS, payload: data })
    } catch (err) {
        dispatch({ type: ADD_NOTE_FAILURE, payload: err })
        dispatch({ type: SHOW_API_ERROR, payload: err })
    }
}

export const editNote = ({ id, title, content }) => async (dispatch) => {
    dispatch({ type: EDIT_NOTE_REQUEST })
    try {
        const data = await updateNoteApi({ id, title, content })
        dispatch({ type: EDIT_NOTE_SUCCESS, payload: data })
    } catch (err) {
        dispatch({ type: EDIT_NOTE_FAILURE, payload: err })
        dispatch({ type: SHOW_API_ERROR, payload: err })
    }
}

export const deleteNote = (note) => async (dispatch) => {
    dispatch({ type: DELETE_NOTE_OPTIMISTIC, payload: note.id })
    try {
        await deleteNoteApi(note.id)
    } catch (err) {
        dispatch({ type: SHOW_API_ERROR, payload: err })
    }
}