import axios from "axios";

export const LOGIN_URL = "/login/";
export const LOGOUT_URL = "/logout/";

const axiosAuth = axios.create({
  baseURL: "http://localhost:8000/api/v1/auth",
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "Token " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosAuth;
