import { Offcanvas, Stack } from "react-bootstrap"
import storeItems from "../data/items.json"
import { OffcanvasHeader } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import FormatCurrency from "../util/formatCurrency"
import CartItem from "./CartItem"
import { useJapitems } from "../hooks/use-japitems"
import { useLocalStorage } from "../hooks/use-local-storage"
import { addDoc, collection } from "firebase/firestore"
import { db, auth } from "../api/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
// type PopCartProps = {
//   isOpen: boolean
// }
export function PopCart({ isOpen }) {
  // export function PopCart({isOpen}:PopCartProps) {
  const [japitems, setJapitems] = useJapitems()
  const { closeCart, openCart, cartItems } = useShoppingCart()
  const [local__icCart, setCartItems] = useLocalStorage("ic-cart", [])
  const cartRef = collection(db, "carts")
  const [user] = useAuthState(auth)

  const handleCart__Order = async () => {
    await addDoc(cartRef, {
      cartId: uuidv4(),
      userId: user.uid,
      orderDate: Date(),
    })
  }
  return (
    <Offcanvas
      // show={isOpen} 2023.01.21/토
      show={true}
      onHide={closeCart}
      placement="end"
      style={{ width: "40vw" }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
            Total{" "}
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                // const item = storeItems.find((i) => i.id === cartItem.id)
                const item = japitems.find((i) => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
          <button className="btn btn--primary" onClick={handleCart__Order}>
            주문하기
          </button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
