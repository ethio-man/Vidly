import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Customer from "./pages/Customers.jsx";
import Genres from "./pages/Genres.jsx";
import Movie from "./pages/Movies.jsx";
import Rentals from "./pages/Rentals.jsx";
import Favorite from "./pages/Favorites.jsx";
import NavBar from "./Components/NavBar.jsx";
function App() {
  const [authenticated, setAuth] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Login setAuth={setAuth} />} />
      {authenticated ? (
        <Route element={<LayoutWithNavBar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/" replace />} />
      )}
    </Routes>
  );
}

import { Outlet } from "react-router-dom";
function LayoutWithNavBar() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
