import axios from "axios"
import { BASE } from "../../constants"
import ApiError from "../../utils/api-error"


const handleApiError = (message, error) => {
    throw new ApiError(message, error)
}

export const fetchNotesApi = async () => {
    try {
        const res = await axios.get(`${BASE}/notes`)
        return res.data
    } catch (error) {
        handleApiError("Failed to fetch notes", error)
    }
}

export const createNoteApi = async (note) => {
    try {
        const res = await axios.post(`${BASE}/notes`, note)
        return res.data
    } catch (error) {
        handleApiError("Failed to create note", error);
    }
}

export const updateNoteApi = async (note) => {
    try {
        const res = await axios.put(`${BASE}/notes/${note.id}`, note)
        return res.data
    } catch (error) {
        handleApiError("Failed to update note", error);
    }
}

export const deleteNoteApi = async (id) => {
    try {
        await axios.delete(`${BASE}/notes/${id}`)
        return { id }
    } catch (error) {
        handleApiError("Failed to delete note", error);
    }
}