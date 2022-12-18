import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {v4 as uuidv4} from "uuid"
import {BsFillPencilFill} from "react-icons/bs"
import {HiOutlineShoppingBag} from "react-icons/hi"
//import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className="flex justify-between">
      <Link to="/">
        <div className="flex">
          <img src="./src/assets/react.svg" />
          <h1>canmart</h1>
        </div>
      </Link>
      <nav className="flex items-center gap-4">
        {/* <Link to="/">Home</Link> */}
        <Link to="/jap">Jap</Link>
        <Link to="/can">Can</Link>
        <Link to="/products">Products</Link>
        <Link to="/carts">
          <HiOutlineShoppingBag className="w-7 h-7" />
        </Link>
        <Link to="/product/new">
          <BsFillPencilFill />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  )
}
