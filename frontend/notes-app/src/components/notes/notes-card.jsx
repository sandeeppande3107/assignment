import { useState } from "react";
import EditModal from "./notes-edit-modal";
import DeleteModal from "./notes-delete-modal";

const NoteCard = ({ note }) => {
    const [noteEditingView, setNodeEditingView] = useState(null);
    const [noteDeleteView, setNodeDeleteView] = useState(null);
    return (
        <>
            <div className="glass-effect rounded-2xl p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-white truncate pr-4">{note.title}</h3>
                    <p className="text-white text-opacity-90 mb-4">{note.content}</p>
                </div>

                <div className="mt-4 flex gap-2">
                    <button className="px-3 py-1 rounded bg-lime-700 text-white text-sm" onClick={() => setNodeEditingView(note)}>
                        Edit
                    </button>
                    <button className="px-3 py-1 rounded bg-red-700 text-white text-sm" onClick={() => setNodeDeleteView(note)}>
                        Delete
                    </button>
                </div>
            </div>
            <EditModal
                open={!!noteEditingView}
                note={noteEditingView}
                onClose={() => setNodeEditingView(null)}
            />
            <DeleteModal
                open={!!noteDeleteView}
                note={noteDeleteView}
                onClose={() => setNodeDeleteView(null)}
            />
        </>
    )
}
export default NoteCard;