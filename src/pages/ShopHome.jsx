import { useState, useEffect, useRef, useContext } from "react"
import { JapitemContext, SearchContext, TestContext } from "../App"
import Banners from "../components/banners/banners"
import Orders from "../components/orders/orders"
import Products from "../components/Products"
import SearchData from "../components/SearchData"
import { v4 as uuidv4 } from "uuid"
import { useAuthContext } from "../context/AuthContext"
//import styles from './ShopHome.module.css'

export default function ShopHome({ search }) {
  return (
    <>
      <Orders />
      {/* <Banners /> */}
      {/* <Products /> */}
      {/* <SearchData japitems={japitems} /> */}
    </>
  )
}
