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
  const [state, setState] = useState(() => {
    return {
      uid: "",
      cell: "",
      customNo: "",
    }
  })

  const { user } = useAuthContext()
  const [customer, setCustomer] = useState([])
  const [cell, setCell] = useState("")
  const [customNo, setCustomNo] = useState("")

  function getAllInputs() {
    return {
      uid: user?.uid,
      cell: (state.cell && state.cell) || "",
      name: user.displayName,
      customNo: (state.customNo && state.customNo) || "",
    }
  }
  const create_rdb_customers = (e) => {
    const data = getAllInputs()

    !user
      ? alert("login!")
      : set(ref(database, `customers/${data.uid}`), {
          name: user.displayName,
          uid: user.uid,
          cell: state.cell,
          customNo: data.customNo,
        })
          .then(() => alert("data created"))
          .catch((error) => console.log(error))
  }

  const read_rdb_customer = () => {
    get(child(ref(database), `customers/${user?.uid}`)) //
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
  function handleChange_customNo(e) {
    setCustomNo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = e.target.id
    if (id == "btnCreate") {
      create_rdb_customers()
    }
    // else if (id == "btnSelect") {
    // read_rdb_customer()
    // }
  }

  return (
    <div>
      <form>
        {console.log(state)}
        <label>phone : </label>
        <input
          type="text"
          id="userbox"
          value={state.cell}
          // value={state.cell ? state.cell : ""}
          // placeholder={customer.cell || ""}
          // value={customer.cell || ""}
          onChange={(e) => {
            setState({ cell: e.target.value })
          }}
        />
        <br />
        <br />
        {/* <label htmlFor="customNo">개인통관 번호 : </label>
        <input
          type="text"
          id="customNo"
          placeholder={customer.customNo || ""}
          onChange={handleChange_customNo}
        /> */}
        <button
          id="btnCreate"
          type="submit"
          className="btn btn--primary"
          onClick={handleSubmit}
        >
          write
        </button>
        {/* <button
          id="btnSelect"
          className="btn btn--primary mini"
          onClick={handleSubmit}
        >
          select
        </button> */}
      </form>
    </div>
  )
}
