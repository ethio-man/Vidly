import axioClient from "./axioClient.js";
const Movies = {
  getAll: () => axioClient.get("/movies"),
  getById: (id) => axioClient.get(`/movies/${id}`),
  addMovie: (movie) => axioClient.post("/movies", movie),
  updateMovie: (id, data) => axioClient.put(`/movies/${id}`, data),
  updateFavorite: (id, data) => axioClient.put(`/movies/favorite/${id}`, data),
  deleteMovie: (id) => axioClient.delete(`/movies/${id}`),
};
export default Movies;
