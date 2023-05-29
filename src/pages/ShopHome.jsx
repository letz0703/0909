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
import { BsTwitter } from "react-icons/bs"
import { Intro } from "./Intro"
import { Wizbox } from "./Wizbox"
export default function ShopHome() {
  const { user, uid, login, logout } = useAuthContext()
  return (
    <div className={`${styles.shop_home} w-[100vw] pt-[300px] `}>
      <Intro user={user} />
      <Wizbox />
      <section>
        <h2>공동구매 안내</h2>
        <pre className={`text-[1.4em] py-2`}>가장 신선한 제품을 최저가로</pre>
        <p>일반 해외주문은 7~10 이상 배송기간이 걸립니다</p>
        <p className={`underline`}>
          어제 국내에 도착한 제품을 내일 받을 수 있다면 어떨까요?
        </p>
        <p>통관 완료 후 가장 최근 도착한 제품으로 바로 보내 드립니다</p>
        자세한 내용은
        <button
          className="btn btn--primary red cursor-pointer text-red-700 p-2"
          onClick={() => (window.location.href = "/jap")}
        >
          jap09
        </button>
        를 참조하세요
        <p>
          <span className={`text-2xl`}>*</span>공동구매 상품이 없을 경우,
          깡통시장 상품을 보냅니다
        </p>
        <p>
          🛍️ 상품만 보시려면
          <button
            className="btn btn--primary blue cursor-pointer text-red-700 p-2"
            onClick={() => (window.location.href = "/shop")}
          >
            shop
          </button>
          menu 를 이용 하세요
          <br />
        </p>
        <div>
          🖱️ 주문을 하시려면{" "}
          <button onClick={login} className={`btn btn--primary  `}>
            login
          </button>
          하셔야 합니다.
        </div>
        <div>
          <span className={`inline-block`}>
            문자와 트위터만 확인 합니다.
            <FaSms color="red" className={`inline-block mr-2  `} size={50} />
          </span>
        </div>
      </section>
      <section>
        <Products {...product} />
      </section>
      <section>Footer</section>
      {/*{!user && <Slide />}*/}
    </div>
  )
}
