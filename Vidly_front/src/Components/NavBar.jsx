import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  return (
    <nav className="bg-stone-800 flex justify-between items-center p-2 text-stone-400">
      <div>
        <Link
          to="/home"
          className={`p-8 ${
            location.pathname === "/home" ? "text-sky-400" : "hover:text-white"
          }`}
        >
          Home
        </Link>
        <Link
          to="/customers"
          className={`p-8 ${
            location.pathname === "/customers"
              ? "text-sky-400"
              : "hover:text-white"
          }`}
        >
          Customers
        </Link>
        <Link
          to="/genres"
          className={`p-8 ${
            location.pathname === "/genres"
              ? "text-sky-400"
              : "hover:text-white"
          }`}
        >
          Genres
        </Link>
        <Link
          to="/movies"
          className={`p-8 ${
            location.pathname === "/movies"
              ? "text-sky-400"
              : "hover:text-white"
          }`}
        >
          Movies
        </Link>
        <Link
          to="/rentals"
          className={`p-8 ${
            location.pathname === "/rentals"
              ? "text-sky-400"
              : "hover:text-white"
          }`}
        >
          Rentals
        </Link>
        <Link
          to="/favorite"
          className={`p-8 ${
            location.pathname === "/favorite"
              ? "text-sky-400"
              : "hover:text-white"
          }`}
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
