import axios from "axios";

const axiosRooms = axios.create({
  baseURL: "http://localhost:8000/api/v1/rooms/",
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "Token " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosRooms