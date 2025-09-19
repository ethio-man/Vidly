import { useState, useEffect } from "react";
import Card from "../Components/Card.jsx";
import Movies from "../api/movie.js";
function Favorite() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await Movies.getAll();
        if (res) setMovies(res.data);
      } catch (err) {
        console.error("Error to fetch movies", err);
      }
    }
    fetchMovies();
  }, []);
  return (
    <div className="flex flex-col items-center font-serif">
      <h1 className="text-yellow-400 text-5xl m-8  hover:text-yellow-300 hover:scale-105">
        Favorite Movies
      </h1>
      <div className="">
        {movies.map(
          (m, k) => m.favorite && <Card key={k} movie={m} index={k} />
        )}
      </div>
    </div>
  );
}
export default Favorite;
