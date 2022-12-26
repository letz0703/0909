import {Link} from "react-router-dom"
import {BsFillPencilFill} from "react-icons/bs"
import {login, logout, onUserStateChange} from "../api/firebase"
import Button from "./ui/button"
import User from "./User"
import {useAuthContext} from "../context/AuthContext"
import CartStatus from "./CartStatus"
import {Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom"

export default function Navbar() {
  const {user, login, logout} = useAuthContext()

  return (
    // <NavbarBs>
    <header
      sticky="top"
      className="flex justify-between border-b border-gray-300 p-2"
    >
      <Link to="/" className="flex items-center text-4xl text-brand">
        <span
          style={{
            fontSize: "1.3rem",
            paddingRight: ".1rem",
            fontWeight: "bold"
          }}
        >
          i.
        </span>
        <span style={{fontSize: "1.5rem"}}>canmart</span>
      </Link>
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
