export default function ({ setSearch, page }) {
  return (
    <div className="bg-stone-400/50 m-4 w-64 py-3 rounded-full text-center">
      <input
        className="border-0"
        placeholder={`Search ${page}...`}
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
