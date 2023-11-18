import { Form, Link } from "react-router-dom"

export function NewTodo() {
  const errorMessage = use()
  return (
    <div className={`container`}>
      <h1 className="page-title">New Todo</h1>
      <Form className={`form`} method="post">
        <div>{errorMessage}</div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">title</label>
            <input type="text" id="title" name="title" />
          </div>
        </div>
        <div className="form-btn-row form-row">
          <Link to=".." className={`btn btn-outline`}>
            Back
          </Link>
          <button className="btn">Create</button>
        </div>
      </Form>
    </div>
  )
}
