import axios from "axios";
import humps from "humps";

export const HttpClient = axios.create({
  transformResponse: [
    (data) => {
      return humps.camelizeKeys(data);
    },
  ],
});

const token = localStorage.getItem("GULLIVER_WORKS_AUTH_TOKEN");

if (token) {
  HttpClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

// https://ryotarch.com/javascript/react/swr-axios-typescript/
