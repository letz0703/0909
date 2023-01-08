import { useState, useEffect, useRef, useContext } from "react"
import { JapitemContext, SearchContext, TestContext } from "../App"
import Banners from "../components/banners/banners"
import Products from "../components/Products"
import SearchData from "../components/SearchData"
//import styles from './ShopHome.module.css'
export default function ShopHome({ search }) {
  return (
    <>
      <Banners />
      {/* <Products /> */}
      <SearchData />
    </>
  )
}
