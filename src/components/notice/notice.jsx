import { useState, useEffect, useRef } from "react"
export default function Notice() {
  const [message, setMessage] = useState("")
  const noticeRef = useRef("")

  useEffect(() => {
    noticeRef.current.focus()
    // noticeRef.current = message
  }, [])

  return (
    <>
      <h1>Notice</h1>
      <input
        value={message}
        ref={noticeRef}
        type="text"
        className="bg-red-300 p-2"
        onChange={(e) => {
          setMessage(e.target.value)
        }}
      />
    </>
  )
}
