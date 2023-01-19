import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai"
import { RiDeleteBin5Fill } from "react-icons/ri"
import useCart from "../hooks/use-cart"
import FormatCurrency from "../util/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { Stack } from "react-bootstrap"

const ICON_BOX = "transition-all cursor-pointer hover:text-brand mx-1"
export default function CartItem({
  id,
  quantity,
  // product,
  // product: { id, image, title, option, quantity, price },
}) {
  const item = storeItems.find((i) => i.id === id)
  if (item == null) return null

  // const { addOrUpdateItem, removeItem } = useCart()
  const { removeFromCart } = useShoppingCart()
  const handleMinus = () => {
    if (quantity < 2) return
    // addOrUpdateToCart(uid, {...product, quantity: quantity - 1})
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 })
  }

  const handlePlus = () => {
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 })
  }
  const handleDelete = () => removeItem.mutate(id)

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img src={item.imgUrl} className="cart-item__img" />
      <div className="me-auto">
        {item.name}
        {quantity >= 1 && (
          <span className="text-muted font-bold" style={{ fontSize: ".75rem" }}>
            x {quantity}개
          </span>
        )}
        <div className="text-muted" style={{ fontSize: ".9rem" }}>
          {FormatCurrency(item.price)}
        </div>
        <div>{FormatCurrency(item.price * quantity)}</div>
        <button
          className="btn btn--danger mini text-ms"
          onClick={() => removeFromCart(id)}
        >
          &times;
        </button>
      </div>
      <style>{`
      .cart-item__img {
        width: 200px;
        aspect-ratio: 1/1;
        object-fit: cover;

      }
      `}</style>
    </Stack>
  )
  //   return (
  //     <li className="flex justify-between my-2 items-center">
  //       <img
  //         src={image}
  //         alt={title}
  //         className="w-24 md:w-48 lg:w-96 rounded-lg"
  //       />
  //       <div className="flex flex-1 justify-between ">
  //         <div className="basis-3/5">
  //           <p className="basis-3/5">{title}</p>
  //           <p className="text-xl font-bold text-brand">{option}</p>
  //           <p>{FormatCurrency(price)}</p>
  //         </div>
  //         <div className="text-2xl flex items-center">
  //           <AiOutlineMinusSquare onClick={handleMinus} className={ICON_BOX} />
  //           <span>{quantity}</span>
  //           <AiOutlinePlusSquare onClick={handlePlus} className={ICON_BOX} />
  //           <RiDeleteBin5Fill onClick={handleDelete} className={ICON_BOX} />
  //         </div>
  //       </div>
  //     </li>
  //   )
}
