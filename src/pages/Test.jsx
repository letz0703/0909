import React from "react"
import { v4 as uuidv4 } from "uuid"
import useToggle from "../hooks/use-toggle"
//import styles from './Test.module.css'

export default function Test() {
  const [value, toggleValue] = useToggle(false)
  return (
    <div>
      <button
        onClick={() => {
          toggleValue()
        }}
      >
        토글
      </button>
      <button
        onClick={() => {
          toggleValue(true)
        }}
      >
        트루화
      </button>
      <button
        onClick={() => {
          toggleValue(false)
        }}
      >
        폴스화
      </button>
    </div>
  )
}
