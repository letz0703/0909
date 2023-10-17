import axios from "axios"
import { useLoaderData } from "react-router-dom"

function TodoList() {
  const todos = useLoaderData()
  return <h1>TodoList {todos.length}</h1>
}

function loader({ request: { signal } }) {
  const todos = axios
    .get("http://localhost:5173/data/todos.json")
    .then((res) => res.data)

  return todos
}

export const todoRoute = {
  loader,
  element: <TodoList />,
}
