import { useState } from "react";
import Movies from "../api/movie.js";
import Edit from "./EditMovie.jsx";
export function Card({ movie, genres, index, refresh, setRefresh }) {
  function handleUpdate(id) {
    document.getElementById(id).classList.remove("hidden");
  }
  async function handleRemove(id) {
    try {
      await Movies.deleteMovie(id);
      setRefresh(refresh + 1);
    } catch (err) {
      if (err.status === 404) alert("Movie is not found!");
      else alert("please try again");
      console.log(err);
    }
  }
  return (
    <div className="flex justify-around items-center bg-gradient-to-r from-cyan-600/30 to-amber-600/20 text-slate-400  text-xl m-16 py-4 rounded-lg">
      <p>{movie.title}</p>
      <p>{movie.genre.name}</p>
      <div>
        <p>Number in Stock:{movie.numberInStock}</p>
        <p>Daily Rental Rate:${movie.dailyRentalRate}</p>
      </div>
      <div>
        <button
          className="cursor-pointer bg-indigo-500 rounded-lg px-6  m-2 text-indigo-300 hover:bg-indigo-700"
          onClick={() => handleUpdate("edt-" + index)}
        >
          edit
        </button>
        <button
          className="cursor-pointer bg-red-600 rounded-lg px-4 text-red-300 hover:bg-red-800"
          onClick={() => handleRemove(movie._id)}
        >
          delete
        </button>
      </div>
      <Edit
        movie={movie}
        genres={genres}
        index={index}
        refresh={refresh}
        setRefresh={setRefresh}
      />
    </div>
  );
}

export function NewCard({ genres, refresh, setRefresh }) {
  const [title, setTitle] = useState("");
  const [genreId, setId] = useState("");
  const [numberInStock, setAmount] = useState();
  const [dailyRentalRate, setRate] = useState();
  const [file, setFile] = useState(null);
  async function handleSave() {
    try {
      await Movies.addMovie({
        title,
        genreId,
        numberInStock,
        dailyRentalRate,
      });
      setRefresh(refresh + 1);
      setTitle("");
      setAmount("");
      setRate("");
    } catch (err) {
      if (err.status === 400) alert("Invalid data.");
      if (err.status === 404) alert("Please choose Genre");
      else alert("please try again");
      console.log("Error", err);
    }
  }
  return (
    <div className="flex justify-around items-center bg-slate-500/50 text-slate-400  text-xl m-16 py-4 rounded-lg">
      <input
        type="text"
        placeholder="Movie title"
        value={title}
        className="bg-slate-400 px-2 rounded text-lg text-slate-600"
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className="bg-gray-600 rounded"
        onChange={(e) => setId(e.target.value)}
      >
        <option>Genres</option>
        {genres.map((g, k) => (
          <option key={k} value={g._id}>
            {g.name}
          </option>
        ))}
      </select>
      <div>
        <input
          type="number"
          placeholder="Number in stock"
          value={numberInStock}
          className="bg-slate-400 w-43 m-2 px-2 text-lg text-slate-600 rounded"
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="number"
          placeholder="Daily rental rate"
          value={dailyRentalRate}
          className="bg-slate-400 w-40 px-2 text-lg text-slate-600 rounded"
          onChange={(e) => setRate(e.target.value)}
        />
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={(e) => setFile(e.target.files)}
        />
        <label
          htmlFor="fileInput"
          title="Upload movie poster."
          className="cursor-pointer bg-blue-600 text-blue-300 text-lg px-4 ml-4  rounded"
        >
          Poster
        </label>
      </div>
      <div>
        <button
          className="cursor-pointer bg-green-700 rounded-lg px-6  m-2 text-green-400 hover:bg-green-800"
          onClick={() => handleSave()}
        >
          Save
        </button>
      </div>
    </div>
  );
}
