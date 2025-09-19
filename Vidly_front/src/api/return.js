import axioClient from "./axioClient.js";
export default function Return(data) {
  return axioClient.post("/returns", data, {
    headers: { "x-auth-token": localStorage.getItem("authToken") },
  });
}
