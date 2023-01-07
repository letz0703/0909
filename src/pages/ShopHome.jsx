import { useState, useEffect, useRef, useContext } from "react"
import { JapitemContext } from "../App"
import Banners from "../components/banners/banners"
import Products from "../components/Products"
//import styles from './ShopHome.module.css'
export default function ShopHome() {
  return (
    <>
      <Banners />
      <Products />
    </>
  )
}
