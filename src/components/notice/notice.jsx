import { useState, useEffect, useRef } from "react"
import { getDatabase, ref, set, get } from "firebase/database"
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
    // setIsUploading(true)
    const id = Date() + crypto.randomUUID()
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

  return (
    <>
      <div className="notice__form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="message"
            value={message ?? ""}
            ref={noticeRef}
            className="bg-red-300 p-2"
            onChange={handleChange}
          />
          <button className="btn btn--primary mini">write notice</button>
        </form>
      </div>
      <h1>Notice</h1>
      <div className="notice__message">
        {noticeList &&
          noticeList.map((r) => (
            <div key={crypto.randomUUID()}>{r.message}</div>
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
