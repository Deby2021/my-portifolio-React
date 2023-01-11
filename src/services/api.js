import axios from "axios";

// Base url: https://api.github.com/users/Deby2021

const api = axios.create({
  baseURL: "https://api.github.com/users/Deby2021",
});

export default api;
