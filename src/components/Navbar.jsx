import { Nav, Navbar as NavbarBs, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
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

export default function Navbar({ search, setSearch }) {
  const { user, login, logout } = useAuthContext()
  const { openCart, cartQuantity } = useShoppingCart()
  const { handleJapitemSearch } = useContext(JapitemContext)
  return (
    // <NavbarBs>
    <header
      sticky="top"
      className="navbar__header flex justify-between border-b border-gray-300 p-2
      items-center
      "
    >
      <div className="navbar__left gap-1 items-center text-brand">
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
            }}
          >
            i.
          </span>
        )}
        <Link to="/" className="flex items-center text-4xl text-brand">
          <span style={{ fontSize: "1.5rem" }}>canmart</span>
        </Link>
      </div>
      <form>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
          autoFocus
        />
      </form>

      <NavbarBs className="ic-navbar" sticky="top">
        <div className="flex justify-center items-center gap-3 me-auto">
          <Link to="/can">Can</Link>
          <Link to="/jap">Jap</Link>
          <Link to="/shop">Store</Link>
          {user && <User user={user} />}
          {!user && <Button text={"login"} onClick={login} />}
          {user && <Button text={"logout"} onClick={logout} />}
        </div>
        {user && (
          <Link to="/carts">
            <CartStatus />
          </Link>
        )}
      </NavbarBs>
      <style>{`
      .navbar__header {
        // background-color: red;
      }
      .navbar__left {
        display: flex;
      }
      `}</style>
    </header>
  )
}
