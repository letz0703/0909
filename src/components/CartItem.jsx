import {AiOutlineMinusSquare, AiOutlinePlusSquare} from "react-icons/ai"
import {RiDeleteBin5Fill} from "react-icons/ri"
import UseCart from "../hooks/use-cart"

const ICON_BOX = "transition-all cursor-pointer hover:text-brand mx-1"
export default function CartItem({
  product,
  product: {id, image, title, option, quantity, price}
}) {
  const {addOrUpdateItem, removeItem} = UseCart()
  const handleMinus = () => {
    if (quantity < 2) return
    // addOrUpdateToCart(uid, {...product, quantity: quantity - 1})
    addOrUpdateItem.mutate({...product, quantity: quantity - 1})
  }

  const handlePlus = () => {
    addOrUpdateItem.mutate({...product, quantity: quantity + 1})
  }
  const handleDelete = () => removeItem.mutate(id)

  return (
    <li className="flex justify-between my-2 items-center">
      <img
        src={image}
        alt={title}
        className="w-24 md:w-48 lg:w-96 rounded-lg"
      />
      <div className="flex flex-1 justify-between ">
        <div className="basis-3/5">
          <p className="basis-3/5">{title}</p>
          <p className="text-xl font-bold text-brand">{option}</p>
          <p>{price}</p>
        </div>
        <div className="text-2xl flex items-center">
          <AiOutlineMinusSquare onClick={handleMinus} className={ICON_BOX} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare onClick={handlePlus} className={ICON_BOX} />
          <RiDeleteBin5Fill onClick={handleDelete} className={ICON_BOX} />
        </div>
      </div>
    </li>
  )
}
