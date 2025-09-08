import { useEffect, useState } from "react"
import LoadingButton from "../shared/loading-button"
import { useDispatch, useSelector } from "react-redux";
import { selectAddNoteState } from "../../store/notes/notes-selector";
import { addNote } from "../../store/notes/notes-actions";
import { useToast } from "../shared/toast/toast-hook";

const AddNoteForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const { loading, isNoteAdded } = useSelector(selectAddNoteState);
    const dispatch = useDispatch();
    const { showToast } = useToast();

    useEffect(() => {
        if (isNoteAdded) {
            showToast("Note added successfully", "success");
        }
    }, [isNoteAdded]);



    const submit = (e) => {
        e.preventDefault()
        if (!title.trim()) {
            setError("Title is required")
            return
        }
        setError('')
        dispatch(addNote({ title, content }));
        setTitle('')
        setContent('')
    }

    return (
        <div className="glass-effect rounded-2xl p-8 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-semibold text-white">Create New Note</h2>
            </div>
            <form onSubmit={submit} className="flex flex-col gap-4">
                <div className="flex gap-2 items-start">
                    <div className="flex-1">
                        <input
                            className={`w-full px-4 py-3 rounded-xl text-white border border-opacity-30 focus:outline-none  ${error ? "border-red-500" : "border-white"}`}
                            placeholder="Title"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                                if (error) setError('')
                            }}
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>
                    <LoadingButton loading={loading} className="bg-lime-700">Add</LoadingButton>
                </div>
                <textarea
                    className="w-full px-4 py-3 rounded-xl text-white border border-white focus:outline-none resize-vertical"
                    placeholder="Content (optional)"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </form>
        </div>
    )
}
export default AddNoteForm;