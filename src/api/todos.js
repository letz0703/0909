import axios from "axios"

export function getTodos(options) {
  return axios
    .get("http://localhost:3000/posts", options)
    .then((res) => res.data)
}
