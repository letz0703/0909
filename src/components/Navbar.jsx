import { Link } from "react-router-dom"
import { BsFillPencilFill } from "react-icons/bs"
import { login, logout, onUserStateChange } from "../api/firebase"
import Button from "./ui/button"
import User from "./User"
import { useAuthContext } from "../context/AuthContext"
import CartStatus from "./CartStatus"
import { Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCart"
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
      className="flex justify-between border-b border-gray-300 p-2
      items-center
      "
    >
      <Link to="/" className="flex items-center text-4xl text-brand">
        <span
          style={{
            fontSize: "1.3rem",
            paddingRight: ".1rem",
            fontWeight: "bold",
          }}
        >
          i.
        </span>
        <span style={{ fontSize: "1.5rem" }}>canmart</span>
      </Link>
      <form>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
        />
      </form>

      <NavbarBs className="flex items-center gap-4 font-semibold">
        {/* <Link to="/">Home</Link> */}
        <Link to="/jap">Jap</Link>
        <Link to="/can">Can</Link>
        <Link to="/products">Products</Link>

        {/* {user && <User user={user} />} */}
        {!user && <Button text={"login"} onClick={login} />}
        {user && <Button text={"logout"} onClick={logout} />}
        {user && user.isAdmin && (
          <Link to="/products/new" className="2xl">
            <BsFillPencilFill />
          </Link>
        )}
        {user && (
          <Link to="/carts">
            <CartStatus />
          </Link>
        )}
      </NavbarBs>
    </header>
  )
}
