import {useState, useEffect, useRef} from "react"
import {useParams} from "react-router-dom"
//import styles from './Videos.module.css'
export default function Videos() {
  const {keyword} = useParams()
  return <h1>Videos {keyword}</h1>
}
