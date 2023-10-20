import { useLoaderData } from "react-router-dom"
import { getTodo } from "../api/todos"

function Todo() {
  const todo = useLoaderData()
  return todo.title
}

function loader({ request: { signal }, params }) {
  console.log(params)
  return getTodo(params.todoId, { signal })
}

export const tRoute = {
  loader,
  element: <Todo />,
}
