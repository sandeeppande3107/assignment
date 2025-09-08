import { createSelector } from "reselect"

const notesState = state => state.notes

export const selectNotes = createSelector(
    [notesState],
    notes => notes.items
)

export const selectNotesState = createSelector(
    [notesState],
    notes => notes.isLoadingNotes
)

export const selectAddNoteState = createSelector(
    [notesState],
    notes => notes.addNotes
)

export const selectEditNoteState = createSelector(
    [notesState],
    notes => notes.editNote
)

export const selectIsNoteDeleted = createSelector(
    [notesState],
    notes => notes.isNoteDeleted
)