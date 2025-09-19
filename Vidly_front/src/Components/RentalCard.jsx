import { useState, useEffect } from "react";
import Customers from "../api/customer.js";
import Movies from "../api/movie.js";
import Rental from "../api/rental.js";
import Return from "../api/return.js";
export function NewCard({ refresh, setRefresh }) {
  const [customers, setCustomers] = useState([]);
  const [movies, setMovies] = useState([]);
  const [customerId, setCustomerId] = useState("");
  const [movieId, setMovieId] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const customer = await Customers.getAll();
        if (customer.data) setCustomers(customer.data);
        const movie = await Movies.getAll();
        if (movie.data) setMovies(movie.data);
      } catch (err) {
        alert("Unable to fetch data please try again".err);
      }
    }
    fetchData();
  }, [refresh]);

  async function handleSave() {
    try {
      await Rental.addRental({ customerId, movieId });
      setRefresh(refresh + 1);
    } catch (err) {
      if (err.status === 400) alert("First select Customer and Movie");
      else "Please try again";
    }
  }
  return (
    <div className="flex justify-around items-center bg-slate-400/50 text-slate-400  text-xl m-26 py-6 rounded-lg">
      <select
        type="text"
        className="bg-slate-600/80 pl-4 rounded text-slate-200 text-[18px]"
        onChange={(e) => setCustomerId(e.target.value)}
      >
        <option>Customer</option>
        {customers.map((c, k) => (
          <option key={k} value={c._id}>
            {c.name}
          </option>
        ))}
      </select>
      <select
        type="text"
        className="bg-slate-600/80 pl-4  rounded text-slate-200 text-[18px]"
        onChange={(e) => setMovieId(e.target.value)}
      >
        <option>Movie</option>
        {movies.map((m, i) => (
          <option key={i} value={m._id}>
            {m.title}
          </option>
        ))}
      </select>

      <button
        className="bg-green-800 text-green-300 rounded-lg px-6 hover:bg-green-900 "
        onClick={() => handleSave()}
      >
        Save
      </button>
    </div>
  );
}

export function Card({ rental, refresh, setRefresh, idd }) {
  async function handleRemove(id) {
    try {
      await Rental.deleteRental(id);
      setRefresh(refresh + 1);
    } catch (err) {
      if (err.status === 404) alert("Rental is not found.");
      console.log("Rental not found", err);
    }
  }
  async function handleReturn(customerId, movieId) {
    try {
      const res = await Return({ customerId, movieId });
      setRefresh(refresh + 1);
    } catch (err) {
      if (err.status === 401) alert("🚫 Unauthorized.");
      if (err.status === 404) alert("Rental not found.");
      if (err.status === 400) alert("Rental already processed!");
      console.log(err);
    }
  }

  return (
    <div
      className={`flex justify-between items-center ${
        rental.dateReturned
          ? "bg-gradient-to-l from-amber-300/30 to-green-600/50"
          : "bg-gradient-to-tl from-sky-300/30 to-cyan-600/40"
      } text-neutral-900  text-xl m-16 py-4 rounded-lg`}
    >
      <p className="px-32">{rental.customer.name}</p>
      <p>{rental.movies.title}</p>
      <div className="flex justify-between items-center">
        {rental.dateReturned ? (
          <p className="mr-16 ">Rental Fee:{rental.rentalFee}</p>
        ) : (
          <button
            id={`btn-${idd}`}
            className="bg-indigo-600 text-indigo-300 px-4 rounded m-2 hover:bg-indigo-700"
            onClick={() => handleReturn(rental.customer._id, rental.movies._id)}
          >
            Return
          </button>
        )}
        <button
          className="bg-red-600 rounded-lg px-4 text-red-300 m-2  hover:bg-red-800"
          onClick={() => handleRemove(rental._id)}
        >
          delete
        </button>
      </div>
    </div>
  );
}
