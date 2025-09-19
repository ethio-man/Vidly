import { useState } from "react";
import Movies from "../api/movie.js";
export default function Edit({ movie, genres, index, refresh, setRefresh }) {
  const [title, setTitle] = useState(movie.title);
  const [genreId, setId] = useState(movie.genre._id);
  const [numberInStock, setAmount] = useState(movie.numberInStock);
  const [dailyRentalRate, setRate] = useState(movie.dailyRentalRate);
  const [file, setFile] = useState(null);

  async function handleChange(id) {
    try {
      await Movies.updateMovie(id, {
        title,
        genreId,
        numberInStock,
        dailyRentalRate,
      });
      setRefresh(refresh + 1);
    } catch (err) {
      if (err.status === 400) alert(err);
      else console.err(err);
    }
  }
  return (
    <div
      id={`edt-${index}`}
      className="hidden absolute flex flex-col  items-center bg-black/30 text-slate-300 m-4 p-4 ml-140"
    >
      <input
        type="text"
        placeholder={movie.title}
        className="bg-slate-400 px-2 rounded text-lg"
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className="bg-black  rounded"
        onChange={(e) => setId(e.target.value)}
      >
        <option>Genres</option>
        {genres.map((g, k) => (
          <option key={k} value={g._id}>
            {g.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder={movie.numberInStock}
        className="bg-slate-400 w-43 m-2 px-2 text-lg  rounded"
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="number"
        placeholder={movie.dailyRentalRate}
        className="bg-slate-400 w-40 px-2 text-lg rounded"
        onChange={(e) => setRate(e.target.value)}
      />
      <input
        type="file"
        id="fileInputs"
        className="hidden"
        onChange={(e) => setFile(e.target.files)}
      />
      <label
        htmlFor="fileInputs"
        title="Upload movie poster."
        className="cursor-pointer bg-slate-600 text-blue-300 text-lg px-4 m-4  rounded hover:bg-slate-700"
      >
        Poster
      </label>

      <button
        className="bg-indigo-700 px-4 rounded m-2 text-sky-200 hover:bg-indigo-800"
        onClick={() => {
          handleChange(movie._id);
          document.getElementById("edt-" + index).classList.add("hidden");
        }}
      >
        Apply
      </button>
    </div>
  );
}
