import { Nav, Navbar as NavbarBs, Col, Row } from "react-bootstrap"
import { Link, Navigate, useNavigate } from "react-router-dom"
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
  const { user, setUser, login, logout, isAdmin, isCustom } = useAuthContext()
  const { openCart, cartQuantity } = useShoppingCart()
  const { handleJapitemSearch } = useContext(JapitemContext)
  const navigate = useNavigate()
  // const navigate = useNavigate()

  return (
    <header className="Navbarjsx__header flex border-b justify-evenly p-3">
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
            onClick={() => navigate("/")}
            className="cursor-pointer"
          >
            i.
          </span>
        )}
        <div className="nav-bar__text-logo">
          <div>
            <Link to="/" className="flex items-center text-2xl">
              canmart
            </Link>
          </div>

          {user && <User user={user} className="hidden md:block" />}
          {user && (
            <span
              onClick={logout}
              className="text-xs p-1 bg-black text-white cursor-pointer"
            >
              logout
            </span>
            // <Button
            //   text={"logout"}
            //   onClick={logout}
            //   style={{ point: "cursor" }}
            // />
          )}
          {!user && (
            <span
              onClick={login}
              className="btn btn--primary mini cursor-pointer"
            >
              login
            </span>
            // <button
            //   text={"로그인"}
            //   onClick={login}
            //   className="btn btn--primary mini"
            // />
          )}
        </div>
      </div>
      {/* </section> */}
      {!window.location.href.includes("/jap") && (
        <section className="sec2">
          {/* <div className={`${styles.nav_center} navbar__search-input`}> */}
          {user && <SearchInput setSearch={setSearch} />}
        </section>
      )}
      <nav className="flex item-center font-bold">
        <div className="flex justify-center items-center gap-3 me-auto">
          {/* <Link to="/can">Can</Link> */}

          {user && (
            <>
              {/* <Link to="/" className="md:hidden">
                home
              </Link> */}
              <Link to="/jap" className="hidden md:block">
                japan09
              </Link>
              <Link to="/shop" className="ml-2 hidden md:block">
                shop
              </Link>
            </>
          )}

          {user && (
            <Link
              to="/my_orders"
              className="hidden md:block"
              style={{ width: "70px" }}
            >
              My Orders
            </Link>
          )}
          {user && (
            <Link to="/carts">
              <CartStatus />
            </Link>
          )}
        </div>
        {user && user.isAdmin ? (
          <BsYoutube
            className="navbar__youtube-icon fs-4 "
            style={{ width: "100%", color: "red" }}
            onClick={() => window.location.replace("/videos")}
          />
        ) : (
          ""
        )}
      </nav>
      <style>{`
      .Navbarjsx__header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        z-index:1;
      }
      .nav-bar__text-logo{
        display: flex;
        justify-content: space-between;
        align-items: center;

      }
      @media (width < 960px){
        .nav-bar__text-logo{
          display: none;
        }
      }
      `}</style>
    </header>
  )
}
