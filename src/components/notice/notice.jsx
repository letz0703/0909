import { useState, useEffect, useRef } from "react"
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  remove,
  child,
} from "firebase/database"
// import { auth, database } from "../../api/firebase.js"
import styles from "./notice.module.css"

import { useAuthContext } from "../../context/AuthContext"
import Wait from "../../util/wait.js"
import { database } from "../../api/firebase"

export default function Notice() {
  const [state, setState] = useState({})
  const [messageId, setMessageId] = useState("")
  const msgJan = "깡통 알림"
  const [message, setMessage] = useState("")
  const [noticeList, setNoticeList] = useState(() => {
    getNotices() //
      .then((result) => setNoticeList(result))
  })
  const noticeRef = useRef("")
  const { user, uid } = useAuthContext()

  async function getNotices() {
    return get(ref(database, "notices")).then((snapshot) => {
      const data = snapshot.exists() ? Object.values(snapshot.val()) : []
      return data
    })
  }

  useEffect(() => {
    noticeRef.current.focus()
  }, [])
  /**
   * ! read rdb once
   * ? 한번만 읽기. 새포스트 작성할 때 사용자 auth 요청 등
   * * onValue(ref(database, uri),snapshot => {},{onlyOnce:true}
   */

  const handleSubmit = (e) => {
    e.preventDefault()
    const { id } = e.target
    // setIsUploading(true)
    // xxx case : const id = Date() + crypto.randomUUID()
    const rdb = getDatabase()
    set(ref(rdb, `notices/${id}`), {
      id,
      message,
    })
    noticeRef.current = ""
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  function handleCRUD(e) {
    e.preventDefault()
    const { id } = e.target
    if (id === "btn_add") {
      addMessage()
    } else if (id === "btn_update") {
      updateMessage()
    } else if (id === "btn_delete") {
      deleteMessage()
    } else {
      selectData()
    }
  }

  function getAllInputs() {
    return [message]
  }

  const addMessage = () => {
    const data = getAllInputs()
    set(ref(database, `notices/${message}`), {
      messsageId: data.messageId,
      message: data.message,
      date: Date(),
    })
      .then(() => alert("data added"))
      .catch((error) => alert("error", error))
  }
  const updateMessage = () => {
    const data = getAllInputs()
    update(ref(database, `notices/${message}`), {
      message: message,
      date: Date(),
    })
      .then(() => alert("data updated"))
      .catch((error) => alert("error", error))
  }
  const deleteMessage = (msg) => {
    // const message = getAllInputs().message
    remove(ref(database, `notices/${msg}`))
      .then(() => alert("data deleted"))
      .catch((error) => alert("error", error))
  }

  const selectData = () => {
    const message = getAllInputs().message
    get(child(ref(database), `notices/${message}`)) //
      .then((snapshot) => {
        if (snapshot.exists()) {
          setState({
            message: snapshot.val().message,
            messageId: snapshot.val().message ?? "",
          })
        } else {
          alert("no data")
        }
      })
      .catch((error) => alert(error))
  }

  return (
    <div className={styles.noticeMain}>
      <div className="notice__form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="messageId">message id</label>
          <input
            type="text"
            id="messageId"
            value={state.messageId}
            onChange={() => {
              setState({ messageId: e.target.value })
            }}
            className={styles.notice__input}
          />
          <label htmlFor="message">message</label>
          <input
            type="text"
            id="message"
            name="message"
            value={message ?? ""}
            ref={noticeRef}
            onChange={handleChange}
            className={styles.notice__input}
          />
          <button
            id="btn_update"
            className="btn btn--primary mini"
            onClick={handleCRUD}
          >
            add
          </button>
          <button
            id="btn_update"
            className="btn btn--primary mini"
            onClick={handleCRUD}
          >
            update
          </button>
          <button
            id="btn_delete"
            className="btn btn--primary mini"
            onClick={handleCRUD}
          >
            delete
          </button>
          <button
            id="btn_select"
            className="btn btn--primary mini"
            onClick={handleCRUD}
          >
            select
          </button>
        </form>
      </div>
      <h1>Notice</h1>
      <div className="notice__message">
        {noticeList &&
          noticeList.map((r) => (
            <div key={crypto.randomUUID()}>
              <div>{r.message}</div>
              <button onClick={() => deleteMessage(r.message)}>-</button>
            </div>
          ))}
      </div>
      {!user?.isAdmin && (
        <style>{`.notice__form{
        display:none;
      }`}</style>
      )}
    </div>
  )
}
