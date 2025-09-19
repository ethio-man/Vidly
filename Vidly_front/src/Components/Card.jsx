import { useState, useEffect } from "react";
import Movies from "../api/movie.js";
function Card({ movie, index }) {
  async function handleFavorite(movie, id) {
    try {
      document.getElementById(id).disabled = true;
      const state = movie.favorite;
      const res = await Movies.updateFavorite(movie._id, {
        favorite: !movie.favorite,
      });
      if (state) {
        document.getElementById(id).textContent = "🤍";
      } else document.getElementById(id).textContent = "❤️";
      if (res.data) document.getElementById(id).disabled = false;
    } catch (err) {
      alert("Movie not updated please try again.");
    }
  }
  return (
    <div className="inline-block w-50 bg-neutral-800 rounded-2xl pb-4 text-white text-center font-sans m-4 drop-shadow-2xl overflow-hidden hover:translate-y-[-8px]">
      <button
        id={`btn-${index}`}
        className="absolute mt-4 ml-12 bg-black/50  text-[18px] cursor-pointer rounded-full px-[8px] py-[8px] transition-colors duration-400 ease-in-out hover:bg-red-500 transform hover:scale-110 duration-200"
        onClick={() => handleFavorite(movie, `btn-${index}`)}
      >
        {movie.favorite ? "❤️" : "🤍"}
      </button>
      <img
        className="w-full h-[280px] rounded-t-xl"
        src={movie.url}
        alt={movie.title}
      />
      <p className="truncate font-bold m-2">{movie.title}</p>
      <br />
      <span className="text-[14px] text-stone-400">{movie.year}</span>
    </div>
  );
}

export default Card;
