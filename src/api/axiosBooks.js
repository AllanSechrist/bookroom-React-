import axios from "axios";

const axiosBooks = axios.create({
  baseURL: "http://localhost:8000/api/v1/books/",
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "Token " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosBooks