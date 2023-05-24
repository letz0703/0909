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
import { FaSms } from "react-icons/fa"
export default function ShopHome() {
  const { user, uid, login, logout } = useAuthContext()
  return (
    <div className={`${styles.shop_home} w-[100vw] pt-[300px] `}>
      {/*<section> <Easy /> </section>*/}
      {/*<section><Gallery /></section>*/}
      <section>
        <div className="flex flex-col justify-center translate-y-[50px] sm:pt-2">
          <h2>WizBox</h2>
          <p className="text-red-700">010.9876.1815</p>
          <h2>.shop</h2>
          <pre className="w-[300px]  mb-4 align-self-center">
            Text Message ONLY
          </pre>
          <div>
            <div className="italic mb-2">google login for an ORDER</div>
            <button onClick={login} className={`btn btn--primary w-1/3 `}>
              login
            </button>
          </div>

          <span className="text-gray-400">↓ scroll DOWN ↓</span>
        </div>
      </section>
      <section className={`h-auto`}>
        <h2>깡통시장 아이템</h2>
        <p>
          🛍️ 전체 상품은
          <button
            className="btn btn--primary blue cursor-pointer text-red-700 p-2"
            onClick={() => (window.location.href = "/shop")}
          >
            shop
          </button>
          menu 확인 하세요
          <br />
        </p>
        <div>
          {" "}
          🖱️ 주문을 하시려면{" "}
          <button onClick={login} className={`btn btn--primary  `}>
            login
          </button>
          하셔야 합니다.
        </div>
        <div>
          <span className={`inline-block`}>
            <FaSms color="red" className={`inline-block mr-2`} />
            문자와 트위터만 확인 합니다.
          </span>
        </div>
        <Products {...product} />
      </section>
      <section>Footer</section>
      {/*{!user && <Slide />}*/}
    </div>
  )
}
