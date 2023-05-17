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
    <div className={`${styles.shop_home} mt-[100px]`}>
      <section>
        {!user && <Slide />}
        <h2>Section 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa
          quasi quisquam voluptas ipsam nobis iusto eaque fugit dolorem animi
          reiciendis delectus veniam sunt, aliquam tempora eos odio! Nobis,
          quasi!
        </p>
      </section>
      <section>
        <h2>Section 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa
          quasi quisquam voluptas ipsam nobis iusto eaque fugit dolorem animi
          reiciendis delectus veniam sunt, aliquam tempora eos odio! Nobis,
          quasi!
        </p>
      </section>
      {/*

      <Products {...product} />*/}
    </div>
  )
}
