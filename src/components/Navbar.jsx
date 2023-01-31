import { Nav, Navbar as NavbarBs, Col, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { BsFillPencilFill } from "react-icons/bs"
import { HiLogin, HiLogout } from "react-icons/hi"
import { login, logout, onUserStateChange } from "../api/firebase"
import Button from "./ui/button"
import User from "./User"
import { useAuthContext } from "../context/AuthContext"
import CartStatus from "./CartStatus"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { JapitemContext } from "../App"
import { useContext } from "react"
import { BsYoutube, BsSearch } from "react-icons/bs"
import SearchInput from "./search-input/search-input"
import styles from "./Navbar.module.css"

export default function Navbar({ search, setSearch }) {
  const { user, login, logout } = useAuthContext()
  const { openCart, cartQuantity } = useShoppingCart()
  const { handleJapitemSearch } = useContext(JapitemContext)
  const navigate = useNavigate()
  return (
    <header className=" flex border-b justify-between p-3">
      {/* <section className="icNavbar__sec1"> */}
      {/* <div className=" text-brand"> */}
      <div className="flex items-center align-items-center">
        {user && user.isAdmin ? (
          <Link to="/products/new" className="2xl pr-1">
            <BsFillPencilFill />
          </Link>
        ) : (
          <span
            style={{
              fontSize: "1.3rem",
              paddingRight: ".1rem",
              fontWeight: "bold",
              color: "black",
            }}
          >
            i.
          </span>
        )}
        <div>
          <Link to="/" className="flex items-center text-2xl">
            canmart
          </Link>
        </div>

        {user && <User user={user} />}
        {user && (
          <span onClick={logout} className="text-xs p-1 bg-black text-white">
            logout
          </span>
          // <Button
          //   text={"logout"}
          //   onClick={logout}
          //   style={{ point: "cursor" }}
          // />
        )}
        {!user && (
          <span onClick={login}>login</span>
          // <button
          //   text={"로그인"}
          //   onClick={login}
          //   className="btn btn--primary mini"
          // />
        )}
        {/* </div> */}

        {/* <div> */}
        {user && user.isAdmin ? (
          <BsYoutube
            className="navbar__youtube-icon fs-4 pl-2"
            style={{ width: "100%", color: "red" }}
            onClick={() => window.location.replace("/videos")}
          />
        ) : (
          ""
        )}
      </div>
      {/* </section> */}
      {!window.location.href.includes("/jap") && (
        <section className="sec2">
          <div className={`${styles.nav_center} navbar__search-input`}>
            <SearchInput setSearch={setSearch} />
          </div>
        </section>
      )}
      <nav className="flex item-center font-bold">
        <div className="flex justify-center items-center gap-3 me-auto">
          {/* <Link to="/can">Can</Link> */}
          <Link to="/jap">Jap</Link>
          <Link to="/shop">Store</Link>
          {user && (
            <Link to="/carts">
              <CartStatus />
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}
