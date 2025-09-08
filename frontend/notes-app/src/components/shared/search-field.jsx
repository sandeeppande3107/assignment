const SearchField = ({ search, setSearch }) => {
    return (
        <div className="glass-effect rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
            <input
                className="w-full px-6 py-4 rounded-xl text-white border border-white focus:outline-none "
                placeholder="Search notes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};
export default SearchField;