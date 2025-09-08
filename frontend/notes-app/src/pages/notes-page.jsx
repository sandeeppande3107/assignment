import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../store/notes/notes-actions";
import NotesGrid from "../components/notes/notes-grid";
import AddNoteForm from "../components/notes/notes-add";
import { selectNotes, selectNotesState } from "../store/notes/notes-selector";
import SearchField from "../components/shared/search-field";
import LoadingSpinner from "../components/shared/loading-spinner";

const NotesPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectNotes);
  const isLoadingNotes = useSelector(selectNotesState);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const filtered = items.filter((n) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q)
    );
  });

  return (
    <div className="container mx-auto px-4 py-8 relative z-10">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">Notes Dashboard</h1>
      </header>
      <SearchField search={search} setSearch={setSearch} />
      <div className="mb-4">
        <AddNoteForm />
      </div>

      {isLoadingNotes ? <LoadingSpinner /> : <NotesGrid
        notes={filtered}
      />}

    </div>
  );
};
export default NotesPage;
