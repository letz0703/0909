import React, { useState } from "react"
import useTimeout from "../hooks/use-timeout"
//import styles from './Test.module.css'

export default function Test() {
  const [count, setCount] = useState(10)
  useDebounce(() => alert(count), 1000, [count])

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>증가</button>
    </div>
  )
}
