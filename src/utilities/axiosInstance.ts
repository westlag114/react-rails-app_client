import axios from "axios";

export const AuthAxios = axios.create({
  transformResponse: [
    (data) => {
      return data;
    },
  ],
});

const token = localStorage.getItem("GULLIVER_WORKS_AUTH_TOKEN");

AuthAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
