import { useState, useEffect, useRef } from "react"
export default function Notice() {
  const [message, setMessage] = useState("")
  const prevMessageRef = useRef("")

  useEffect(() => {
    // noticeRef.current.focus()
    prevMessageRef.current = message
  }, [message])

  return (
    <>
      <h1>Notice</h1>
      <input
        value={message}
        ref={prevMessageRef}
        type="text"
        className="bg-red-300 p-2"
        onChange={(e) => {
          setMessage(e.target.value)
        }}
      />
    </>
  )
}
