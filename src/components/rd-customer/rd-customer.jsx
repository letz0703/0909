/**
 * 1 Make rd-customer database
 * ! input for uid and cell
 *
 */
import { database } from "../../api/firebase"
import { useState, useEffect, useRef } from "react"
import { useAuthContext } from "../../context/AuthContext"
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  remove,
  child, //
} from "firebase/database"
export default function RdCustomer({ _notice }) {
  const [cell, setCell] = useState("")
  const { user } = useAuthContext()

  const create_rdb_customers = (e) => {
    const collecionName = user.uid
    !user
      ? alert("login!")
      : set(ref(database, `customers/${user?.uid}`), {
          uid: user.uid,
          cell: cell,
        })
          .then(() => alert("data created"))
          .catch((error) => console.log(error))
  }

  function handleChange_cell(e) {
    setCell(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    create_rdb_customers()
  }
  return (
    <div>
      <form>
        <label htmlFor="cell">phone : </label>
        <input
          type="text"
          id="cell"
          value={cell || ""}
          onChange={handleChange_cell}
        />
        <button
          type="submit"
          className="btn btn--primary"
          onClick={handleSubmit}
        >
          write
        </button>
      </form>
    </div>
  )
}
