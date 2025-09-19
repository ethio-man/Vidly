import Genre from "../api/genre.js";
import { useState, useEffect } from "react";
export function Card({ title }) {
  return (
    <div className=" inline-block text-center text-indigo-300 font-sans drop-shadow-2xl bg-gradient-to-l from-teal-500/50 to-indigo-700/50  text-[16px] m-4 w-64 py-22  rounded  hover:scale-105">
      <p>{title}</p>
    </div>
  );
}

export function NewCard({ refresh, setRefresh }) {
  const [name, setName] = useState("");
  async function handleSave() {
    if (name) {
      try {
        await Genre.addGenre({ name });
        setRefresh(refresh + 1);
      } catch (err) {
        if (err.status === 401) alert("⚠️ Unauthorized");
        if (err.status === 400) alert(err.message);
      }
    }
  }
  return (
    <div className=" absolute  flex flex-col items-center bg-gradient-to-l from-amber-300/50 to-blue-700/50  text-200 m-6 mt-32 py-34   p-16 rounded-t-full rounded-b-full w-44 hover:translate-x-2">
      <input
        className="bg-cyan-200 rounded-full px-3 m-2 w-32"
        type="text"
        placeholder="New genre"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="bg-sky-400 text-sky-200 rounded-lg w-16 py-1 hover:bg-sky-500"
        onClick={() => handleSave()}
      >
        Add
      </button>
    </div>
  );
}
