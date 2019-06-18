import axios from "axios";
require('dotenv').config()

const api = axios.create({
  baseURL: process.env.URL_API
});

export default api;
