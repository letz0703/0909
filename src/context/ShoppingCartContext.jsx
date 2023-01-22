import { createContext, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { usePop } from "../components/pop/pop"
import { PopCart } from "../components/PopCart"
import { useLocalStorage } from "../hooks/use-local-storage"

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useLocalStorage("ic-cart", [])
  const [isOpen] = usePop(false)
  // const [isOpen, setIsOpen] = useState(false)
  // console.log(cartItems)
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const openCart = () => {
    setIsOpen(true)
  }
  const closeCart = () => {
    navigate("/shop")
    setIsOpen(false)
  }

  //functions
  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }
  function increaseCartQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function decreaseCartQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id)
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id)
    })
  }
  const shoppingCartContextValue = {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    openCart,
    closeCart,
    cartItems,
    cartQuantity,
  }

  return (
    <ShoppingCartContext.Provider value={shoppingCartContextValue}>
      {children}
      <PopCart />
      {/*<PopCart isOpen={isOpen} cartItems={cartItems} />*/}
    </ShoppingCartContext.Provider>
  )
}
//WDS https://www.youtube.com/watch?v=lATafp15HWA&t=1748s 2023.01.19/목
