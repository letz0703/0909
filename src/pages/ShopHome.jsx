import { useState, useEffect, useRef, useContext } from "react"
import { JapitemContext, SearchContext, TestContext } from "../App"
import Banners from "../components/banners/banners"
import Orders from "../components/orders/orders"
import Products from "../components/Products"
import SearchData from "../components/SearchData"
import { v4 as uuidv4 } from "uuid"
import { useAuthContext } from "../context/AuthContext"
import Customs from "../components/customs/customs"
//import styles from './ShopHome.module.css'

export default function ShopHome({ search }) {
  const { japitems } = useContext(JapitemContext)
  return (
    <>
      {/* <Customs /> */}
      {/* <Orders /> */}
      {/* <Banners /> */}
      {/* <Products /> */}
      <SearchData japitems={japitems} />
    </>
  )
}
