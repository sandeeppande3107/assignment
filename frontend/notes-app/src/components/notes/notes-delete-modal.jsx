import { useDispatch } from "react-redux";
import { deleteNote } from "../../store/notes/notes-actions";

const DeleteModal = ({ open, onClose, note }) => {
    const dispatch = useDispatch();

    const onDelete = (data) => {
        dispatch(deleteNote(data));
    }
    if (!open) return null
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
                <h2 className="text-lg font-semibold mb-3">Delete Note</h2>
                <p className="text-gray-600 mb-4">
                    Are you sure you want to delete <span className="font-medium">{note.title}</span>?
                </p>
                <div className="flex justify-end gap-2">
                    <button
                        className="px-4 py-2 rounded border"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 rounded bg-red-600 text-white"
                        onClick={() => { onDelete(note) }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )

}

export default DeleteModal;
