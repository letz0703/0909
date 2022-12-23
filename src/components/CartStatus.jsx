import {useQuery} from "@tanstack/react-query"
import {useState, useEffect, useRef} from "react"
import {HiOutlineShoppingBag} from "react-icons/hi"
import {getCart} from "../api/firebase"
import {useAuthContext} from "../context/Auth"
//import styles from './CartStatus.module.css'
export default function CartStatus() {
  // move below under export default
  const {uid} = useAuthContext()
  const {data: products} = useQuery(["carts"], () => getCart(uid))
  return (
    <div>
      <HiOutlineShoppingBag className="w-7 h-7" />
      {products && <p>{products.length}</p>}
    </div>
  )
}
