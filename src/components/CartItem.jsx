//import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai"
//import { RiDeleteBin5Fill } from "react-icons/ri"
import useCart from "../hooks/use-cart"
import FormatCurrency from "../util/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { Button, Stack } from "react-bootstrap"
import { useJapitems } from "../hooks/use-japitems"
import { getRDB_Japitem } from "../api/firebase"

const ICON_BOX = "transition-all cursor-pointer hover:text-brand mx-1"

export default function CartItem(props) {
  const { id, quantity } = props
  const [japitems, setJapitems] = useJapitems()
  //const storeItems = japitems
  const item = japitems.find((i) => i.id === id)
  if (item == null) return null

  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    handleDecreaseCartQty,
    removeFromCart,
    getItemQuantity,
  } = useShoppingCart()
  const qty = getItemQuantity(id)

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={`/imgs/` + item.imgs}
        style={{ width: "10em", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}
          {/*{quantity >= 1 && (*/}
          {qty >= 1 && (
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
          >
            {" "}
            -{" "}
          </button>
          {quantity}
          <button
            className="btn-gradient blue mini"
            onClick={() => increaseCartQuantity(item.id)}
          >
            {" "}
            +{" "}
          </button>{" "}
        </div>
        <div>현재 잔량: {item.qty}</div>
      </div>
      <div> {FormatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}
