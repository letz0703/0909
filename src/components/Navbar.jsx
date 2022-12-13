import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {v4 as uuidv4} from "uuid"
//import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/jap">Jap</Link>
      <Link to="/can">Can</Link>
    </nav>
  )
}
