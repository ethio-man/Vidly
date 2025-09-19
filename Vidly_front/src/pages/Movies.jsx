import { useState, useEffect } from "react";
import Movies from "../api/movie.js";
import Genre from "../api/genre.js";
import SearchBar from "../Components/SearchBar.jsx";
import { Card, NewCard } from "../Components/MovieCard.jsx";
function Movie() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await Movies.getAll();
        if (res) setMovies(res.data);
        const genre = await Genre.getAll();
        if (genre.data) setGenres(genre.data);
      } catch (err) {
        if (err.response && err.status === 404)
          alert("Movies list is not found ", err);
        else alert("Something went wrong please try again.", err);
      }
    }
    fetchMovie();
  }, [refresh]);
  return (
    <div>
      <div className="flex flex-col items-center">
        <SearchBar setSearch={setSearch} page={"Movie"} />
      </div>
      <NewCard genres={genres} refresh={refresh} setRefresh={setRefresh} />
      {movies.map(
        (m, i) =>
          m.title.toLowerCase().startsWith(search.toLowerCase()) && (
            <Card
              key={i}
              movie={m}
              genres={genres}
              index={i}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          )
      )}
    </div>
  );
}
export default Movie;
