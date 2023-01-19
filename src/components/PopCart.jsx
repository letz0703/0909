import { Offcanvas, Stack } from "react-bootstrap"
import { OffcanvasHeader } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCart"
import CartItem from "./CartItem"
import PopCartItem from "./PopCartItem"

// type PopCartProps = {
//   isOpen: boolean
// }
export function PopCart({ isOpen }) {
  // export function PopCart({isOpen}:PopCartProps) {
  const { closeCart, openCart, cartItems } = useShoppingCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <PopCartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
