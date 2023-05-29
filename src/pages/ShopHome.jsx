/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from "react"
import { getRDB_user, getRDB_users } from "../api/firebase"
// import { SearchContext } from "../App"
// import JorderQuery from "../components/jorder-special/jorder-special"
import Products from "../components/Products"
// import SearchInput from "../components/search-input/search-input"
import Slide from "../components/slide/slide"
import { useAuthContext } from "../context/AuthContext"
import useUpdatedEffect from "../hooks/use-updated-effect"
// import { useAuthContext } from "../context/AuthContext"
// import { useJapitems } from "../hooks/use-japitems"
// import { useLogger } from "../hooks/use-logger"
// import useToggle from "../hooks/use-toggle"
// import Store from "./Store"
// import Test from "./Test"
import product from "./data_product.json"
import styles from "./ShopHome.module.css"
import Navbar from "../components/Navbar"
//import { Gallery } from "../components/Gallery/Gallery"
import { Easy } from "../components/Easy/Easy"
import { Intro } from "./Intro"
import { Wizbox } from "./Wizbox"
import { Info09 } from "./Info_09"
export default function ShopHome() {
  const { user, uid, login, logout } = useAuthContext()
  return (
    <div className={`${styles.shop_home} w-[100vw] pt-[300px] `}>
      <Intro user={user} />
      <Wizbox />
      <Info09 />
      <Products {...product} />
      <section>Footer</section>
      {/*{!user && <Slide />}*/}
    </div>
  )
}
