import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {BsFillPencilFill} from "react-icons/bs"
import {HiOutlineShoppingBag} from "react-icons/hi"
import {login, logout, onUserStateChange} from "../api/firebase"
import Button from "./ui/button"
import User from "./User"
import {useAuthContext} from "../context/Auth"
import CartStatus from "./CartStatus"

export default function Navbar() {
  const {user, login, logout} = useAuthContext()
  // const [user, setUser] = useState()
  // useEffect(() => {
  //   onUserStateChange(user => {
  //     // console.log(user)
  //     setUser(user)
  //   })
  // }, [])
  const handleLogin = () => {
    login().then(setUser)
  }
  const handleLogout = () => {
    logout().then(setUser)
  }
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <span
          style={{
            fontSize: "1.3rem",
            paddingRight: ".1rem",
            fontWeight: "bold"
          }}
        >
          i.
          {/* <img src={LogoSvg} alt="logo" style={{width: "30px"}} /> */}
        </span>
        <span style={{fontSize: "1.5rem"}}>canmart</span>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        {/* <Link to="/">Home</Link> */}
        <Link to="/jap">Jap</Link>
        <Link to="/can">Can</Link>
        <Link to="/products">Products</Link>
        {user && (
          <Link to="/carts">
            <HiOutlineShoppingBag className="w-7 h-7" />
            <CartStatus />
          </Link>
        )}

        {user && user.isAdmin && (
          <Link to="/products/new" className="2xl">
            <BsFillPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={"login"} onClick={handleLogin} />}
        {user && <Button text={"logout"} onClick={handleLogout} />}
      </nav>
    </header>
  )
}
