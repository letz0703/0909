import {useState, useEffect} from "react"
import {v4 as uuidv4} from "uuid"
//import styles from './button.module.css'

export default function Button__SHOP({text, onClick}) {
  return (
    <button onClick={onClick} className="bg-brand rounded-sm hover:text-white">
      {text}
    </button>
  )
}
