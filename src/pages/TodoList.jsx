import { Form, Link, useLoaderData } from "react-router-dom"
import { TodoItem } from "./TodoItem"

export function TodoList() {
  const todos = useLoaderData()
  return (
    <div>
      <h1>Todos</h1>
      <Link to="/todos/new" className="p-2 btn--danger">
        new
      </Link>
      <Form className="form">
        <div className="form-row">
          <div className="form-group">
            <label htm1For="query">Searchs</label>
            <input type="search" name="query" id="query"></input>
          </div>
          <button className="btn">search</button>
        </div>
      </Form>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  )
}
