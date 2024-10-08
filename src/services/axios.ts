import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
