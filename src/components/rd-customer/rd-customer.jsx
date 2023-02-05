/**
 * 1 Make rd-customer database
 * 2 input for uid and cell and createdatabase,`customers/${data.uid}
` * 3 read from database,`customers/${data.uid}` - customers
 * ! database,`customers/${data.uid}` add for customNo
 *
 */
import { database } from "../../api/firebase"
import { useState, useEffect, useRef } from "react"
import { useAuthContext } from "../../context/AuthContext"
import styles from "./rd-customer.module.css"
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
  // const [customer, setCustomer] = useState([])
  // const [cell, setCell] = useState("")
  // const [customNo, setCustomNo] = useState("")

  useEffect(() => {
    user && read_rdb_customer()
  }, [user])

  function getAllInputs() {
    if (!user) {
      alert("login!")
    } else {
      return {
        uid: user?.uid,
        cell: (state.cell && state.cell) || "",
        name: user.displayName,
        customNo: (state.customNo && state.customNo) || "",
      }
    }
  }
  const create_rdb_customers = (e) => {
    const data = getAllInputs()

    user &&
      set(ref(database, `customers/${data.uid}`), {
        name: user?.displayName,
        uid: user?.uid,
        cell: Number(state.cell),
        customNo: data.customNo,
      })
        .then(() => alert("data saved"))
        .catch((error) => console.log(error))
  }

  function delete_rdb_customer() {
    const data = getAllInputs()
    remove(ref(database, `customers/${data.uid}`))
      .then(() => {
        alert("data removed")
      })
      .catch((error) => console.log(error))
  }

  const read_rdb_customer = () => {
    get(child(ref(database), `customers/${user?.uid}`)) //
      .then((snapshot) => {
        if (snapshot.exists()) {
          setState({
            uid: snapshot.val().uid,
            cell: snapshot.val().cell,
            customNo: snapshot.val().customNo || "",
          })
        }
        // else {
        //   alert("no data")
        // }
      })
      .catch((error) => alert(error))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = e.target.id
    if (id == "btnCreate") {
      create_rdb_customers()
    } else if (id == "btnSelect") {
      read_rdb_customer()
    } else if (id == "btnDelete") {
      delete_rdb_customer()
    }
  }

  return (
    <div>
      <form>
        <label>phone</label>
        <input
          type="text"
          id="userbox"
          value={state.cell}
          onChange={(e) => {
            setState({ ...state, cell: e.target.value })
          }}
          className="bg-slate-300"
        />
        <label>개인통관 번호</label>
        <input
          type="text"
          id="userbox"
          value={state.customNo}
          onChange={(e) => {
            setState({ ...state, customNo: e.target.value })
          }}
          className="bg-slate-300"
        />
        <button
          id="btnCreate"
          type="submit"
          className="btn btn--primary"
          onClick={handleSubmit}
        >
          save
        </button>
        {user && user.isAdmin && (
          <button
            id="btnDelete"
            type="submit"
            className="btn btn--primary"
            onClick={handleSubmit}
          >
            통관정보삭제
          </button>
        )}

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
