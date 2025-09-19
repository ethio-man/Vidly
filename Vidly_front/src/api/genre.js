import axioClient from "./axioClient.js";
const Genre = {
  getAll: () => axioClient.get("/genres"),
  getById: (id) => axioClient.get(`/genres/${id}`),
  addGenre: (genre) =>
    axioClient.post("/genres", genre, {
      headers: { "x-auth-token": localStorage.getItem("authToken") },
    }),
  updateOne: (id, data) => axioClient.put(`/genres/${id}`, data),
  deleteGenre: (id) => axioClient.delete(`/genres/${id}`),
};

export default Genre;
