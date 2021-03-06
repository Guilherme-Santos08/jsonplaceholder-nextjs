import axios from "axios"

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
})

export const apiJsonPlaceholder = {
  get(endpoint) {
    return api.get(endpoint);
  },
};