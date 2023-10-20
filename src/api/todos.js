import { baseAPI } from "./base"

export function getTodos(options) {
  //return baseAPI.get(`todos`, options).then((res) => res.data)
  return baseAPI.get("todos.json", options).then((res) => res.data)
}
export function getTodo(todoId, options) {
  return baseAPI.get(`todos/${todoId}`, options).then((res) => res.data)
}
