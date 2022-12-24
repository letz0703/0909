import {HiOutlineShoppingBag} from "react-icons/hi"
import UseCart from "../hooks/use-cart"

export default function CartStatus() {
  const {
    cartQuery: {data: products}
  } = UseCart()

  return (
    <div className="relative">
      <HiOutlineShoppingBag className="w-10 h-10 text-4xl" />
      {products && (
        <p
          className="w-6 h-6 text-center text-brand font-bold rounded-full
        absolute -top-2 -right-2"
        >
          {products.length}
        </p>
      )}
    </div>
  )
}
