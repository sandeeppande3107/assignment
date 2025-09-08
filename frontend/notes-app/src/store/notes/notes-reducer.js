import { ADD_NOTE_FAILURE, ADD_NOTE_REQUEST, ADD_NOTE_SUCCESS, DELETE_NOTE_OPTIMISTIC, EDIT_NOTE_FAILURE, EDIT_NOTE_REQUEST, EDIT_NOTE_SUCCESS, FETCH_NOTES_FAILURE, FETCH_NOTES_REQUEST, FETCH_NOTES_SUCCESS } from "./notes-events"

const initialState = {
    items: [],
    isLoadingNotes: false,
    addNotes: {
        loading: false,
        isNoteAdded: false,
    },
    editNote: {
        loading: false,
        isNoteEdited: false,
    },
    isNoteDeleted: false,
}
export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTES_REQUEST:
            return {
                ...state,
                items: [],
                isLoadingNotes: true,
            }
        case FETCH_NOTES_SUCCESS:
            return {
                ...state,
                items: action.payload,
                isLoadingNotes: false,
            }
        case FETCH_NOTES_FAILURE:
            return {
                ...state,
                isLoadingNotes: false,
            }
        case ADD_NOTE_REQUEST:
            return {
                ...state,
                addNotes: {
                    loading: true,
                    isNoteAdded: false,
                },
            }
        case ADD_NOTE_SUCCESS:
            return {
                ...state,
                addNotes: {
                    loading: false,
                    isNoteAdded: true,
                },
                items: [...state.items, action.payload],
            }
        case ADD_NOTE_FAILURE:
            return {
                ...state,
                addNotes: {
                    loading: false,
                    isNoteAdded: false,
                },
            }
        case EDIT_NOTE_REQUEST:
            return {
                ...state,
                editNote: {
                    loading: true,
                    isNoteEdited: false,
                },
            }
        case EDIT_NOTE_SUCCESS:
            return {
                ...state,
                editNote: {
                    loading: false,
                    isNoteEdited: true,
                },
                items: state.items.map((n) => (n.id === action.payload.id ? action.payload : n))
            }
        case EDIT_NOTE_FAILURE:
            return {
                ...state,
                editNote: {
                    loading: false,
                    isNoteEdited: false,
                },
            }
        case DELETE_NOTE_OPTIMISTIC:
            return {
                ...state,
                items: state.items.filter((n) => n.id !== action.payload),
            }
        default:
            return state
    }
}