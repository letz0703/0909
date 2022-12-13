import {useState, useEffect, useRef} from "react"
import {useParams} from "react-router-dom"
//import styles from './CanItemDetail.module.css'
export default function CanItemDetail() {
  const {itemName} = useParams()
  return <h1>CanItemDetail {itemName}</h1>
}
