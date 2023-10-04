import axios from "axios"

export function getJ09(opt) {
  axios.get("/j09", opt).then((res) => res.data)
}
