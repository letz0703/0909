import {useState, useEffect} from "react"
import {Outlet} from "react-router-dom"
import {v4 as uuidv4} from "uuid"
import Navbar from "../components/Navbar/Navbar"
//import styles from './Root.module.css'

export default function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
