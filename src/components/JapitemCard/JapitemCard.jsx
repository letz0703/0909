import {useState, useEffect, useRef} from "react"
//import styles from './JapitemCard.module.css'
export default function JapitemCard({item}) {
  return (
    <div>
      {item.name} {item.price}
    </div>
  )
}
