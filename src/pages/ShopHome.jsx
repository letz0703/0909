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

export default function ShopHome() {
  const { user, uid } = useAuthContext()
  return (
    <div className={`${styles.shop_home} mt-[100px] w-[100vw]`}>
      <section className="flex flex-col justify-center -translate-y-1/2">
        <h2>WizBox</h2>
        <p className="text-red-700">010.9876.1815</p>
        <h2>.shop</h2>
        <pre className="w-1/4 align-self-center">Text Message ONLY</pre>
        <div className="italic">google login for an ORDER</div>

        <span className="text-gray-400">↓ scroll DOWN ↓</span>
      </section>
      <section>
        <h2>깡통시장 상품 가격을 검색 해 보세요</h2>
        <p>
          🛍️ 전체 상품은
          <span
            className="cursor-pointer text-red-700 p-2"
            onClick={() => (window.location.href = "/shop")}
          >
            shop
          </span>
          메뉴에서 확인 하세요(login 필요)
        </p>
        <div> 🖱️ 주문을 하시려면 구글 로그인 하셔야 합니다.</div>
        <span>✏️ 전화 문의 못 받으며, 문자와 트위터만 확인 합니다</span>
        <Products {...product} />
      </section>
      <section></section>
      {/*{!user && <Slide />}*/}
    </div>
  )
}
