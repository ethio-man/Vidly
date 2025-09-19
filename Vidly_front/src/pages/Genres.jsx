import { useState, useEffect } from "react";
import Genre from "../api/genre.js";
import { Card, NewCard } from "../Components/Genreacard.jsx";
import SearchBar from "../Components/SearchBar.jsx";
function Genres() {
  const [search, setSearch] = useState("");
  const [genres, setGenres] = useState([]);
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    async function fetchData() {
      try {
        const genre = await Genre.getAll();
        if (genre.data) setGenres(genre.data);
      } catch (err) {
        alert("Couldn't  find genre:", err);
      }
    }
    fetchData();
  }, [refresh]);
  return (
    <>
      <div className="flex flex-col items-center">
        <SearchBar setSearch={setSearch} page={"Genre"} />
      </div>
      <div className="ml-6">
        <NewCard refresh={refresh} setRefresh={setRefresh} />
      </div>
      <div className="ml-74 mt-12 mr-44 bg-[rgb(6,6,30,1)]/50 rounded-lg">
        {genres.map(
          (g, i) =>
            g.name.toLowerCase().startsWith(search.toLowerCase()) && (
              <Card title={g.name} key={i} />
            )
        )}
      </div>
    </>
  );
}
export default Genres;
