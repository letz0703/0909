import { useState, useRef } from "react"
//import styles from './PopCartItem.module.css'
export default function PopCartItem(item) {
  return (
    <>
      <h1>{item.id}</h1>
      <p>{item.quantity}</p>
    </>
  )
}
