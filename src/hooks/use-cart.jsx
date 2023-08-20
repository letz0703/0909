import { useState, useEffect } from "react"
import { useAuthContext } from "../context/AuthContext"
import { getCart, addOrUpdateToCart, removeFromCart } from "../api/firebase"

export default function useCart() {
  const { uid } = useAuthContext()
  const [cart, setCart] = useState(null)

  useEffect(() => {
    if (uid) {
      getCart(uid).then((cart) => setCart(cart))
    }
  }, [uid])

  const addOrUpdateItem = (product) => {
    addOrUpdateToCart(uid, product).then((cart) => setCart(cart))
  }

  const removeItem = (id) => {
    removeFromCart(uid, id).then((cart) => setCart(cart))
  }

  return { cart, addOrUpdateItem, removeItem }
}
