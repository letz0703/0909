import {createContext, useState, useContext} from "react"

// type ShoppingCartProviderProps = {
//   children: ReactNode
// }
// type ShoppingCartContext = {
// openCart: () => void
// closeCart: () => void
// 	getItemQuantity: (id: number) => number
// 	increaseCartQuantity: (id: number) => void
// 	decreaseCartQuantity: (id: number) => void
// 	removeFromCart: (id: number) => void
// 	cartQuantity: number
//  cartItems: CartItem[]
// }
// type CartItem = {
// id: number
// quantity: number
// }
const ShoppingCartContext = createContext({})
// const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}) {
  // export function ShoppingCartProvider({children}:ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState([])
  // const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState()
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  function getItemQuantity(id) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  function increaseCartQuantity(id) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, {id, quantity: 1}]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: item.quantity + 1}
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

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
