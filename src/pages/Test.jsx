import React, { useState } from "react"
import useTimeout from "../hooks/use-timeout"
//import styles from './Test.module.css'

export default function Test() {
  const [count, setCount] = useState(10)
  const { clear, reset } = useTimeout(() => setCount(0), 1000)
  return (
    <>
      <div>use타임아웃</div>
      <button>{count}</button>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
      <button onClick={clear}>Clear</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}
