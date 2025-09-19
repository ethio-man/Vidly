import axioClient from "./axioClient.js";
const Customers = {
  getAll: () => axioClient.get("/customers"),
  getById: (id) => axioClient.get(`/customers/${id}`),
  updateCustomer: (id, data) => axioClient.put(`/customers/${id}`, data),
  createCustomer: (data) => axioClient.post("/customers", data),
  deleteCustomer: (id) => axioClient.delete(`/customers/${id}`),
};
export default Customers;
