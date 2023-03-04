import { Offcanvas, Stack } from "react-bootstrap"
// import storeItems from "../data/items.json"
import { OffcanvasHeader } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import FormatCurrency from "../util/formatCurrency"
import CartItem from "./CartItem"
import { useJapitems } from "../hooks/use-japitems"
import { useLocalStorage } from "../hooks/use-local-storage"
import { addDoc, collection } from "firebase/firestore"
import { db, auth, addNewCart } from "../api/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useState } from "react"
// type PopCartProps = {
//   isOpen: boolean
// }

const deleiveryCost = parseInt(4000)
export function PopCart({ isOpen }) {
  // export function PopCart({isOpen}:PopCartProps) {
  const [japitems, setJapitems] = useJapitems()
  const { closeCart, openCart, cartItems } = useShoppingCart()
  const [local__icCart, setCartItems] = useLocalStorage("ic-cart", {
    ...cartItems,
  })
  const [user] = useAuthState(auth)
  const cartRef = collection(db, "carts")
  // const [cartItem, setCartItem] = useState({});

  // console.log("local",local__icCart)
  const handleCart__Order = async () => {
    await addNewCart(local__icCart)
    // await addDoc(cartRef, {
    //   userId: user.uid,
    //   cartId: crypto.randomUUID(),
    //   orderDate: Date(),
    //   cartItems: local__icCart,
    // })

    setCartItems([])
    window.location.replace("/shop")
  }

  async function handleResetCart() {
    setCartItems([])
    window.location.replace(".")
  }
  console.log(cartItems)
  return (
    <Offcanvas
      show={isOpen}
      // show={true}
      onHide={closeCart}
      placement="top"
      style={{ width: "100%", height: "80%" }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={crypto.randomUUID()} {...item} />
          ))}
          <hr />
          <div className="ms-auto font-bold text-2xl p-3">
            Total{" "}
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                // const item = storeItems.find((i) => i.id === cartItem.id)
                const item = japitems.find((i) => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
            <div>+ 기본택배 {<span>{deleiveryCost}</span>}원</div>
            <p className="text-blue-400">
              <span
                onClick={() => window.location.replace("/jap")}
                className="p-2 bg-pink-200"
              >
                현지 구매대행
              </span>
              신청고객은 택배비 빼고 송금하시면 됩니다
            </p>
          </div>
          <button className="btn btn--primary" onClick={handleCart__Order}>
            주문하기
          </button>
        </Stack>
        <div className="flex justify-center">
          <button className="btn red" onClick={() => handleResetCart()}>
            reset
          </button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
