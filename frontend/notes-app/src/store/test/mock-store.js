import { configureStore } from "@reduxjs/toolkit";

export const createTestStore = (preloadedState) => {
    const defaultState = preloadedState ?? {
        notes: {
            addNotes: { loading: false, isNoteAdded: false },
        },
    };

    const notesReducer = (state = defaultState.notes, action) => {
        switch (action.type) {
            case 'ADD_NOTE':
                return {
                    ...state,
                    addNote: { ...state.addNote, isNoteAdded: true },
                };
            default:
                return state;
        }
    };

    return configureStore({
        reducer: { notes: notesReducer },
        preloadedState: defaultState
    });
};