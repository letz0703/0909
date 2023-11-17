import axios from "axios"
import { Form, Link, useLoaderData, useNavigation } from "react-router-dom"
import { getTodos } from "../../api/todos"
import { useEffect, useRef } from "react"

function TodoList() {
  const {
    todos,
    searchParams: { query },
  } = useLoaderData()
  const { state } = useNavigation()
  const queryRef = useRef()

  useEffect(() => {
    queryRef.current.value = query
  }, [query])

  return (
    <div className={`flex-row`}>
      <h1 className={`page-title`}>
        Todos
        <div className={`title-btns`}>
          <Link to="/todos/new" className={`btn`}>
            New
          </Link>
        </div>
      </h1>
      <Form className={`form`}>
        <div className={`form-row`}>
          <div className="form-group">
            <label htmlFor="query">Search</label>
            <input type="search" name="query" id="query" ref={queryRef} />
          </div>
          <button className="btn">Search</button>
        </div>
      </Form>
      {state === "loading" ? (
        "Loading"
      ) : (
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
      )}
    </div>
  )
}

//function loader({ request: { signal }, params }) {
//  const todos = getTodos(params.todoId, { signal })

//  return todos
//}
async function loader({ request: { signal, url } }) {
  const query = new URL(url).searchParams.get("query") || ""
  return {
    searchParams: { query },
    todos: await fetch(`http://localhost:3000/todos?q=${query}`, {
      signal,
    }).then((res) => res.json()),
  }
  //return fetch(`http://localhost:3000/todos?q=${query}`, { signal })
}

export const todoRoute = {
  loader,
  element: <TodoList />,
}
