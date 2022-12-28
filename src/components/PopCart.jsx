import {Offcanvas, Stack} from "react-bootstrap"
import {OffcanvasHeader} from "react-bootstrap"
import {useShoppingCart} from "../context/ShoppingCart"
import CartItem from "./CartItem"

// type PopCartProps = {
//   isOpen: boolean
// }
export function PopCart({isOpen}) {
  // export function PopCart({isOpen}:PopCartProps) {
  const {closeCart, cartItems} = useShoppingCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      {/* <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Offcanvas.Body> */}
    </Offcanvas>
  )
}
