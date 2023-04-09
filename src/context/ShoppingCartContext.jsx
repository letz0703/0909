import {createContext, useState, useContext} from "react"
import {useNavigate} from "react-router-dom"
import {usePop} from "../components/pop/pop"
import {PopCart} from "../components/PopCart"
import {useLocalStorage} from "../hooks/use-local-storage"
import {useAuthContext} from "./AuthContext"
import {updateRDB_user, getRDB_users, getRDB_Japitem} from "../api/firebase"
import {useJapitems} from "../hooks/use-japitems"
import {get} from "firebase/database"

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}) {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useLocalStorage("ic-cart", [])
  // const [isOpen] = usePop(false)
  const [isOpen, setIsOpen] = useState(false)
  // console.log(cartItems)
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )
  // async function addNewUser(user) {
  // return [...user]
  // }

  const openCart = () => {
    setIsOpen(true)
    getRDB_users()
    // const userInfo = Object.values(fbUser)
    // console.log("userInfo:", userInfo)
    // addNewUser(user)
  }

  const closeCart = () => {
    setIsOpen(false)
    navigate("/", {cartItems})
    updateRDB_user()
  }

  const [japitems] = useJapitems()
  //functions
  function getItemQuantity(id) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  function increaseCartQuantity(cartItemID) {
    const res = japitems?.find(row => row.id === cartItemID)
    console.log("cartItemID?", cartItemID)
    setCartItems(currItems => {
      const japitem = getRDB_Japitem(cartItemID)

      if (currItems.find(item => item.id === cartItemID) == null) {
        //getRDB_Japitem(cartItemID).then(data => {
        //  console.log(data)
        //})
        return [
          ...currItems,
          {
            cartItemID,
            quantity: 1,
            name: res.name,
            price: res.price,
            amount: res.price * 1
          }
        ]
      } else {
        return currItems.map(item => {
          if (item.id === crypto.randomUUID()) {
            return {
              ...item,
              quantity: item.quantity + 1,
              amount: (item.quantity + 1) * item.price
            }
          } else {
            return item
          }
        })
      }
    })
  }
  function decreaseCartQuantity(id) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: item.quantity - 1}
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  }
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
    getTotal
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
