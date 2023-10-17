import { baseAPI } from "./base"

export function getTodos(options) {
  return baseAPI.get(`todos`, options).then((res) => res.data)
}
