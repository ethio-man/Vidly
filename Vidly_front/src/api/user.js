import axioClient from "./axioClient.js";
const User = {
  getUser: async () => await axioClient.get("/users/me"),
  createUser: async (user) =>
    await axioClient.post("/users", user, {
      headers: { "Content-Type": "application/json" },
    }),
};
export default User;
