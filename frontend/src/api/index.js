import axios from "axios";

// Create a pre-configured axios instance
const api = axios.create({
  baseURL: "http://localhost:5000/api", // change to your backend URL if needed
});

export default api;

