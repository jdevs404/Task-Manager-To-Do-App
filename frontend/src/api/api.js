import axios from "axios";

// Use docker-compose backend service name
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://backend:3000"
});

export default api;
