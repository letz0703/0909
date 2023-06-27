//https://youtu.be/lATafp15HWA?t=2021
import { createContext, useState, useContext, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { usePop } from "../components/pop/pop"
import { PopCart } from "../components/PopCart"
//import { useLocalStorage } from "../hooks/use-local-storage"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { useAuthContext } from "./AuthContext"
import {
  updateRDB_user,
  getCart,
  getRDB_users,
  getRDB_Japitem,
  database,
} from "../api/firebase"
import { useJapitems } from "../hooks/use-japitems"
import { get, ref } from "firebase/database"

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("ic-cart", [])
  const cart_user = localStorage.getItem("ic-user")
  const parsed_cart_user = JSON.parse(cart_user)
  const cart_user_id = parsed_cart_user?.uid
  const navigate = useNavigate()
  // const [isOpen] = usePop(false)
  const [isOpen, setIsOpen] = useState(false)
  // console.log(cartItems)
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )
  // async function addNewUser(user) {
  // return [...user]

  const openCart = () => {
    setIsOpen(true)
    getRDB_users()
    // const userInfo = Object.values(fbUser)
    // console.log("userInfo:", userInfo)
    // addNewUser(user)
  }

  const closeCart = () => {
    setIsOpen(false)
    navigate("/", { cartItems })
    updateRDB_user()
  }

  const [japitems] = useJapitems()
  //functions
  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }

  const ref_cartItemQuantity = useRef(0)

  function increaseCartQuantity(id) {
    /**
     * https://youtu.be/lATafp15HWA?t=2184
     */
    setCartItems((currItems) => {
      /**
       * 현재 아이템의 정보 가져오기
       */
      if (currItems.find((i) => i.id === id) == null) {
        const price = japitems.find((i) => i.id === id)?.price
        return [...currItems, { id, quantity: 1, price }]
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
    })
  }

  // 빼기
  function decreaseCartQuantity(id) {
    setCartItems((currItems) => {
      if (cartItems.find((i) => i.id === id)?.quantity === 1) {
        return cartItems.filter((item) => item.id !== id)
      } else {
        return cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })

    //const rdbt = getRDB_Japitem(id)
    //rdbt.then((row) => console.log("row.qty:", row.qty))
    //rdbt.then((row) => {
    //  ref_rdb_qty.current = row.qty
    //  localStorage.setItem("rdb_qty", ref_rdb_qty.current)
    //})
  }

  function removeFromCart(id) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id)
    })
  }

  const getTotal = () =>
    cartItems?.reduce((total, item) => total + item.price * item.quantity, 0)
  // console.log('total', getTotal())

  const shoppingCartContextValue = {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    openCart,
    closeCart,
    cartItems,
    cartQuantity,
    setCartItems,
    getTotal,
  }

  return (
    <ShoppingCartContext.Provider value={shoppingCartContextValue}>
      {children}
      {/* <PopCart /> */}
      <PopCart isOpen={isOpen} cartItems={cartItems} />
    </ShoppingCartContext.Provider>
  )
}
//WDS https://www.youtube.com/watch?v=lATafp15HWA&t=1748s 2023.01.19/목
