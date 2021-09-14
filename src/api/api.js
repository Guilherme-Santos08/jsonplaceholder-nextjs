import axios from "axios"

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
})

export const apiPokedex = {
  get(endpoint) {
    return api.get(endpoint);
  },
};