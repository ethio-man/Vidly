import { useState, useEffect } from "react";
import Movies from "../api/movie.js";
import Card from "../Components/Card.jsx";
import SearchBar from "../Components/SearchBar.jsx";
function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await Movies.getAll();
        if (res) setMovies(res.data);
      } catch {
        alert("unable to find movies please try again");
      }
    }
    fetchData();
  }, [refresh]);
  return (
    <>
      <div className="flex flex-col items-center">
        <SearchBar setSearch={setSearch} page={"Movie"} />
      </div>
      <div className="flex justify-center inline-block m-16 ">
        {movies.map(
          (m, k) =>
            m.title.toLowerCase().startsWith(search.toLowerCase()) && (
              <Card key={k} movie={m} index={k} />
            )
        )}
      </div>
    </>
  );
}
export default Home;
