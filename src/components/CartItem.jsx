import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai"
import { RiDeleteBin5Fill } from "react-icons/ri"
import useCart from "../hooks/use-cart"
import FormatCurrency from "../util/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { Button, Stack } from "react-bootstrap"
import { useJapitems } from "../hooks/use-japitems"

const ICON_BOX = "transition-all cursor-pointer hover:text-brand mx-1"

export default function CartItem(props) {
  const { cartItemID: id, quantity } = props
  const [japitems, setJapitems] = useJapitems()
  const storeItems = japitems
  const item = storeItems.find((i) => i.id === id)
  if (item == null) return null

  //prettier-ignore
  const { increaseCartQuantity, decreaseCartQuantity, handleDecreaseCartQty, removeFromCart, } = useShoppingCart()

  return (
    //prettier-ignore
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "125px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}
          {quantity >= 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {FormatCurrency(item.price)}
        </div>
        <div>
          <button
            className="btn-gradient red mini"
            onClick={() => decreaseCartQuantity(item.id)}
          > - </button>
          {quantity}
          <button className="btn-gradient blue mini" onClick={() => increaseCartQuantity(item.id)}
          > + </button> </div> </div>
      <div> {FormatCurrency(item.price * quantity)}</div>
      <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)} >
        &times;
      </Button>
    </Stack>
  )
}
