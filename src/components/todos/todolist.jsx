import axios from "axios"

function TodoList() {
  return <h1>TodoList</h1>
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
