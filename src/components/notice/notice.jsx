import { useState, useEffect, useRef } from "react"
import { getDatabase, ref, set } from "firebase/database"
import { useAuthContext } from "../../context/AuthContext"
export default function Notice() {
  const [message, setMessage] = useState("")
  const noticeRef = useRef("")
  // async function adminUser(user) {
  //   return get(ref(database, "admins")) //
  //   // return get(ref(db, "admins")) //
  //     .then(snapshot => {
  //       if (snapshot.exists()) {
  //         const admins = snapshot.val()
  //         const isAdmin = admins.includes(user.uid)
  //         return {...user, isAdmin}
  //       }
  //       return user
  //     })
  // }

  useEffect(() => {
    noticeRef.current.focus()
    // noticeRef.current = message
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // setIsUploading(true)
    const id = crypto.randomUUID()
    const rdb = getDatabase()
    return set(ref(rdb, `notices/${id}`), {
      id,
      message,
    })
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <>
      <h1>Notice</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          value={message ?? ""}
          ref={noticeRef}
          className="bg-red-300 p-2"
          onChange={handleChange}
        />
        <button className="btn btn--primary mini">write</button>
      </form>
    </>
  )
}
