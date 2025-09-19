import axioClient from "./axioClient.js";
const Rental = {
  getAll: () => axioClient.get("/rentals"),
  getById: (id) => axioClient.get(`/rentals/${id}`),
  addRental: (rental) => axioClient.post("/rentals", rental),
  updateRental: (id, data) => axioClient.put(`/rentals/${id}`, data),
  deleteRental: (id) => axioClient.delete(`/rentals/${id}`),
};

export default Rental;
