import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {v4 as uuidv4} from "uuid"
import {BsFillPencilFill} from "react-icons/bs"
import {HiOutlineShoppingBag} from "react-icons/hi"
import styles from "./Navbar.module.css"
import {login} from "../api/firebase"

export default function Navbar() {
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/">
        <div className="flex items-center text-brand">
          <h1>canmart</h1>
        </div>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        {/* <Link to="/">Home</Link> */}
        <Link to="/jap">Jap</Link>
        <Link to="/can">Can</Link>
        <Link to="/products">Products</Link>
        <Link to="/carts">
          <HiOutlineShoppingBag className="w-7 h-7" />
        </Link>
        <Link to="/product/new" className="2xl">
          <BsFillPencilFill />
        </Link>
        <button onClick={login}>Login</button>
      </nav>
    </header>
  )
}
