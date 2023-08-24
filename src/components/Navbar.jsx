import { Link, Navigate, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { BsFillPencilFill } from "react-icons/bs"
import { onUserStateChange } from "../api/firebase"
import User from "./User"
import { useAuthContext } from "../context/AuthContext"
import CartStatus from "./CartStatus"
import { useEffect } from "react"
import { BsYoutube } from "react-icons/bs"
import SearchInput from "./search-input/search-input"
import styles from "./Navbar.module.css?inline"
import { CiTwitter } from "react-icons/ci"
import { useLocalStorage } from "../hooks/useLocalStorage"

export default function Navbar(props) {
  const { user, login, logout, isAdmin, isCustom } = useAuthContext()
  const { search, setSearch } = props

  const navigate = useNavigate()

  const [icUser, setIcUser] = useLocalStorage("ic-user", {})

  useEffect(() => {
    onUserStateChange((user) => {
      const a = localStorage.getItem("addressTo")
      const b = localStorage.getItem("phoneNumber")
      setIcUser({
        ...user,
        addressTo: a || "배송지 요함",
        phoneNumber: b || "전화번호 요함",
      })
    })
  }, [user])

  return (
    <header
      className={`${styles.header} flex items-center  justify-evenly border-b ${
        !user ? "hidden" : ""
      }`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
      }}
    >
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
        <div className="nav-bar__text-logo flex space-x-3 items-center xm:hidden">
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
          )}

          {!user && (
            <span
              onClick={login}
              className="btn btn--primary mini cursor-pointer"
            >
              login
            </span>
          )}
        </div>
      </div>
      {window.location.pathname !== "/jap" ? (
        <section className={`sec2 `}>
          <SearchInput setSearch={setSearch} className={`box`} />
        </section>
      ) : (
        <section className="sec2  text-blue-100">
          <h3
            className={`btn red`}
            onClick={() =>
              window.open(
                "https://www.figma.com/file/1l1NkHPEb4IQWd3t8G7dEB/wizbox.shop?type=whiteboard&node-id=0%3A1&t=3WZI5Sw6ZBLsaGSh-1",
                "_blank"
              )
            }
          >
            wizbox.shop
          </h3>
        </section>
      )}
      <nav className=" flex item-center font-bold relative justify-between md:mx-16 lg:mx-32 ">
        <div className="flex justify-center items-center gap-3 me-auto">
          {/* <Link to="/can">Can</Link> */}
          <CiTwitter
            className="text-blue-700 font-bold text-2xl"
            onClick={() =>
              window.location.replace("https://twitter.com/icanmart")
            }
          />

          {icUser && (
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
        {user && isAdmin ? (
          <BsYoutube
            className="navbar__youtube-icon fs-4 "
            style={{ width: "100%", color: "red" }}
            onClick={() => window.location.replace("/videos")}
          />
        ) : (
          ""
        )}
        {/*<div>*/}
        {/*<svg
            className={`absolute bottom-0 left-1/2 -translate-x-1/2`}
            width="250"
            height="4"
            viewBox="0 0 250 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L428 2"
              stroke="#282828"
              strokeLinecap="round"
              strokeWidth={2}
            />
          </svg>*/}
        {/*</div>*/}
        <div className={`md:hidden space-y-2 py-3`}>
          <span className={`block h-0.5 w-7 bg-[#282828]`}></span>
          <span className={`block h-0.5 w-7 bg-[#282828]`}></span>
          <span className={`block h-0.5 w-7 bg-[#282828]`}></span>
        </div>
      </nav>
    </header>
  )
}
