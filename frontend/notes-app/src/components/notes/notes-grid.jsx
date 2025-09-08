import NoteCard from "./notes-card";

const NotesGrid = ({ notes }) => {
    if (!notes.length) return <p className="text-white">No notes available</p>
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {notes.map((n) => (
                <NoteCard key={n.id} note={n} />
            ))}
        </div>
    )
}


export default NotesGrid;