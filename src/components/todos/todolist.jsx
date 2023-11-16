import axios from "axios"
import { Link, useLoaderData } from "react-router-dom"
import { getTodos } from "../../api/todos"

function TodoList() {
  const todos = useLoaderData()
  return (
    <div className={`flex-row`}>
      <h1 className={`page-title`}>to</h1>
      <ul>
        {todos.map((todo, key) => (
          <li
            key={todo.id}
            className={todo.completed ? "strike-through" : undefined}
          >
            {todo.id} {todo.title}
            <Link className={`btn btn-sm`} to={todo.id.toString()}>
              {/*<Link className={`btn btn-sm`} to={`/todos/${todo.id}`}>*/}
              view
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function loader({ request: { signal }, params }) {
  //const todos = getTodos(params.todoId, { signal })
  const todos = ({ request: { signal } }) => {
    return fetch("http://localhost:3000/todos", { signal })
  }
  return todos
}

export const todoRoute = {
  loader,
  element: <TodoList />,
}
