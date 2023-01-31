import { Nav, Navbar as NavbarBs, Col, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { BsFillPencilFill } from "react-icons/bs"
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
    <header className=" flex flex-1 justify-between  p-4 ">
      <section className="icNavbar__sec1">
        {/* <div className=" text-brand"> */}
        <div className="flex items-center align-items-center">
          <div>
            {user && user.isAdmin ? (
              <Link to="/products/new" className="2xl">
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
          </div>
          <div>
            <Link to="/" className="flex items-center text-4xl">
              <span style={{ fontSize: "1.4rem", color: "black" }}>
                canmart
              </span>
            </Link>
          </div>
          {user && (
            <Button
              text={"logout"}
              onClick={logout}
              style={{ point: "cursor" }}
            />
          )}
          {!user && <Button text={"login"} onClick={login} />}
        </div>

        <div>
          {user && user.isAdmin ? (
            <BsYoutube
              className="navbar__youtube-icon fs-4"
              onClick={() => window.location.replace("/videos")}
            />
          ) : (
            ""
          )}
        </div>
      </section>
      {!window.location.href.includes("/jap") && (
        <section className="sec2">
          <div className={`${styles.nav_center} navbar__search-input`}>
            <SearchInput setSearch={setSearch} />
          </div>
        </section>
      )}
      <section className="sec3">
        <div>
          <NavbarBs className="ic-navbar" sticky="top">
            <div className="flex justify-center items-center gap-3 me-auto">
              {/* <Link to="/can">Can</Link> */}
              <Link to="/jap">Jap</Link>
              <Link to="/shop">Store</Link>
              {user && <User user={user} />}
            </div>
            {user && (
              <Link to="/carts">
                <CartStatus />
              </Link>
            )}
          </NavbarBs>
        </div>
      </section>
    </header>
  )
}
