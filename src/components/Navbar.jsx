import { NavLink, Navigate, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { BsFillPencilFill } from "react-icons/bs"
import { onUserStateChange } from "../api/firebase"
import User from "./User"
import { useAuthContext } from "../context/AuthContext"
import CartStatus from "./CartStatus"
import { useEffect } from "react"
import { BsYoutube } from "react-icons/bs"
import SearchInput from "./search-input/search-input"
//import styles from "./Navbar.module.css?inline"
import styles from "./Navbar.module.css"
import { CiTwitter } from "react-icons/ci"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { useMediaQuery } from "usehooks-ts"
import { useState } from "react"

const navMotion = {
  visible: {},
  hidden: {},
}

const itemMotion = {
  visible: {},
  hidden: {},
}

export default function Navbar(props) {
  const { user, login, logout, isAdmin, isCustom } = useAuthContext()
  const { search, setSearch } = props
  const size = useMediaQuery("(min-width:800px)")
  const [toggle, setToggle] = useState(false)

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
      className={`
      ${styles.header}
      py-2 flex items-center justify-around border-b
      ${!user ? "hidden" : ""}
      `}
    >
      <div className="flex justify-center items-center align-items-center">
        {user && user.isAdmin ? (
          <NavLink to="/products/new" className="2xl ">
            <BsFillPencilFill />
          </NavLink>
        ) : (
          <div className="">
            <span
              style={{
                fontSize: "1.3rem",
                paddingRight: ".1rem",
                fontWeight: "bold",
                color: "black",
              }}
              onClick={() => navigate("/")}
              className="cursor-pointer "
            >
              i.
            </span>
          </div>
        )}
        <div className="nav-bar__text-logo flex space-x-3 items-center xm:hidden">
          {size && (
            <div>
              <NavLink to="/" className="flex items-center text-2xl">
                canmart
              </NavLink>
            </div>
          )}

          {size && user && <User user={user} className="hidden md:block" />}

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
      <div>
        {window.location.pathname !== "/jap" ? (
          <SearchInput setSearch={setSearch} />
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
      </div>
      <nav className=" flex item-center font-bold relative justify-between md:mx-16 lg:mx-32 ">
        <div className="flex justify-center item-center gap-3 me-auto items-cener">
          {/* <NavLink to="/can">Can</NavLink> */}
          {size && (
            <CiTwitter
              className="text-blue-700 font-bold text-2xl"
              onClick={() =>
                window.location.replace("https://twitter.com/icanmart")
              }
            />
          )}

          {icUser && (
            <NavLink
              to="/my_orders"
              className="hidden md:block"
              style={{ width: "70px" }}
            >
              My Orders
            </NavLink>
          )}

          {user && (
            <NavLink to="/carts">
              <CartStatus />
            </NavLink>
          )}
        </div>
        {/*{user && isAdmin ? (
          <BsYoutube
            className="navbar__youtube-icon fs-4 "
            style={{ width: "100%", color: "red" }}
            onClick={() => window.location.replace("/videos")}
          />
        ) : (
          ""
        )}*/}
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
        {!size && (
          <div
            //햄버거
            className={`space-y-2 my-3 cursor-pointer z-30`}
            onClick={() => setToggle((prev) => !prev)}
          >
            <motion.span
              animate={{
                rotateZ: toggle ? 45 : 0,
                translateY: toggle ? 12 : 0,
              }}
              className={` block h-0.5 w-7 bg-[#c10002]`}
            ></motion.span>
            <motion.span
              animate={{ width: toggle ? 0 : "" }}
              className={`block h-0.5 w-7 bg-green-200`}
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggle ? -45 : 0,
                translateY: toggle ? -8 : 0,
              }}
              className={`block h-0.5 w-7 bg-blue-300`}
            ></motion.span>
          </div>
        )}
        {/* 햄버거 */}
        {toggle && (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.5 }}
            //className={`flex   bg-white w-[100%] bottom-0 left-0 h-screen items-center justify-center`}
            className={`fixed flex z-20 bg-white bottom-0 left-0 w-full h-screen items-center justify-center`}
          >
            <div className={`fixed flex flex-col gap-20`}>
              <NavLink to="/" onClick={() => setToggle(false)}>
                home
              </NavLink>
              <NavLink to="/my_orders" onClick={() => setToggle(false)}>
                my order
              </NavLink>
              <NavLink to="http://twitter.com/icanmart">twitter</NavLink>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}
