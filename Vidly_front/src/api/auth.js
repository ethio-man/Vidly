import axioClient from "./axioClient.js";

export default function LoginUser(data) {
  return axioClient.post("/auth", data);
}
