/**
 * 1 Make rd-customer database
 * 2 input for uid and cell and create rdb
 * 3 read from rdb - customers
 * ! rdb add for customNo
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
  const { user } = useAuthContext()
  const [customer, setCustomer] = useState([])
  const [cell, setCell] = useState("")

  const create_rdb_customers = (e) => {
    const collecionName = user.uid
    !user
      ? alert("login!")
      : set(ref(database, `customers/${user?.uid}`), {
          name: user.displayName,
          uid: user.uid,
          cell: cell,
        })
          .then(() => alert("data created"))
          .catch((error) => console.log(error))
  }

  const read_rdb_customer = () => {
    get(child(ref(database), `customers/${user.uid}`)) //
      .then((snapshot) => {
        if (snapshot.exists()) {
          setCustomer(snapshot.val())
        } else {
          alert("no data")
        }
        console.log(snapshot.val())
      })
      .catch((error) => alert(error))
  }

  function handleChange_cell(e) {
    setCell(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.id == "btn_createRDB-cell") {
      create_rdb_customers()
    } else if (e.target.id == "btn_select") {
      read_rdb_customer()
    }
  }
  return (
    <div>
      <form>
        <label htmlFor="cell">phone : </label>
        <input
          type="text"
          id="cell"
          value={customer.cell || ""}
          onChange={handleChange_cell}
        />
        <button
          id="btn_createRDB-cell"
          type="submit"
          className="btn btn--primary"
          onClick={handleSubmit}
        >
          write
        </button>
        <button
          id="btn_select"
          className="btn btn--primary mini"
          onClick={handleSubmit}
        >
          select
        </button>
      </form>
    </div>
  )
}
