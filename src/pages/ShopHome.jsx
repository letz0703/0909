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
import { Intro2 } from "./Intro2"
import { Wizbox } from "./Wizbox"
import { Info09 } from "./Info_09"
import { UseOpenClose } from "../util/use_open_close"
export default function ShopHome() {
  const { user, uid, login, logout } = useAuthContext()
  const timeOpen = "19:00:00"
  const timeClose = "07:00:00"
  const [html_open, setHtml_open] = useState(true)
  const [currentTime, setCurrentTime] = useState(() => getCurrentTime())

  function getCurrentTime() {
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    var seconds = now.getSeconds()
    return hours + ":" + seconds
  }

  function changePageByTime() {
    const now = getCurrentTime()
    //if (timeClose >= currentTime >= timeOpen) {
    if (timeOpen <= now && now <= timeClose) {
      setHtml_open(true)
    } else {
      setHtml_open(false)
    }
    //return html_open ? am : pm
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      changePageByTime()
    }, 60 * 1000)
    return () => clearTimeout(timeout)
  }, [currentTime])

  return (
    <div className={`${styles.shop_home} w-[100vw]  `}>
      {false ? (
        //{html_open ? (
        <>
          {/*{!user && <Intro />}*/}
          {!user && <Info09 />}
          {/*<Info09 />*/}
          {user && <Products {...product} />}
          {/*<Products {...product} />*/}
          {/*<Slide />*/}
        </>
      ) : (
        <>
          {user && <Intro user={user} />}
          {user && <Products {...product} />}
          {!user && <Intro2 />}
        </>
      )}
      {/*<Intro />*/}
      {/*<Info09 />*/}
      {/*<Products />*/}
      {/*<Info09 />*/}
      {/*<section>Footer</section>*/}
      {/*{!user && <Slide />}*/}
    </div>
  )
}
