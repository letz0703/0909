import { useState, useEffect, useRef } from "react"
import { getDatabase, ref, set, get, update, remove } from "firebase/database"
// import { auth, database } from "../../api/firebase.js"

import { useAuthContext } from "../../context/AuthContext"
import Wait from "../../util/wait.js"
import { database } from "../../api/firebase"

export default function Notice() {
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
    }
  }

  function getAllInputs() {
    return [message]
  }

  const addMessage = () => {
    const data = getAllInputs()
    set(ref(database, `notices/${message}`), {
      message: message,
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

  return (
    <>
      <div className="notice__form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="message">message: </label>
          <input
            type="text"
            id="message"
            name="message"
            value={message ?? ""}
            ref={noticeRef}
            className="bg-red-300 p-2"
            onChange={handleChange}
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
            <>
              <div key={crypto.randomUUID()}>{r.message}</div>
              <button onClick={() => deleteMessage(r.message)}>remove</button>
            </>
          ))}
      </div>
      {!user?.isAdmin && (
        <style>{`.notice__form{
        display:none;
      }`}</style>
      )}
    </>
  )
}
