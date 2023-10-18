import axios from "axios"
import { useLoaderData } from "react-router-dom"

function TodoList() {
  const todos = useLoaderData()
  return (
    <div className={`flex-row`}>
      <h1 className={`page-title`}>Todos</h1>
      <ul>
        {todos.map((todo, key) => (
          <li
            key={todo.id}
            className={todo.completed ? "strike-through" : undefined}
          >
            {todo.id} {todo.title}
          </li>
        ))}
      </ul>
    </div>
  )
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
