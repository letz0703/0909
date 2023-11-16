import { Link } from "react-router-dom"

export function NewTodo() {
  return (
    <div className={`container`}>
      <h1 className="page-title">New Todo</h1>
      <form className={`form`}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">title</label>
            <input type="text" id="title" name="title" />
          </div>
          <div className="form-btn-row form-row">
            <Link to=".." className={`btn btn-outline`}>
              Back
            </Link>
            <div className="btn">Create</div>
          </div>
        </div>
      </form>
    </div>
  )
}
