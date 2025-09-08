import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectEditNoteState } from "../../store/notes/notes-selector"
import LoadingButton from "../shared/loading-button"
import { editNote } from "../../store/notes/notes-actions"
import { useToast } from "../shared/toast/toast-hook"

const EditModal = ({ open, note, onClose }) => {
    const [title, setTitle] = useState(note?.title || '')
    const [content, setContent] = useState(note?.content || '')
    const dispatch = useDispatch();
    const { loading, isNoteEdited } = useSelector(selectEditNoteState);
    const { showToast } = useToast();

    useEffect(() => {
        setTitle(note?.title || '')
        setContent(note?.content || '')
    }, [note])

    useEffect(() => {
        if (isNoteEdited) {
            onClose();
            showToast("Note updated successfully", "success");
        }
    }, [isNoteEdited])

    const onSave = (data) => {
        dispatch(editNote(data));
    }


    if (!open) return null
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Edit Note</h2>
                <input className="w-full border p-2 rounded mb-3" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                <textarea className="w-full border p-2 rounded mb-3 min-h-[120px]" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
                <div className="flex justify-end gap-2">
                    <button className="px-4 py-2" onClick={onClose}>
                        Cancel
                    </button>
                    <LoadingButton loading={loading} className="px-4 py-2 bg-indigo-600 text-white rounded" onClick={() => onSave({ id: note.id, title, content })} >
                        Save
                    </LoadingButton>
                </div>
            </div>
        </div>
    )
}
export default EditModal;