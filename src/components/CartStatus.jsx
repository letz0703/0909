import { HiOutlineShoppingBag } from "react-icons/hi"
import { useShoppingCart } from "../context/ShoppingCartContext"
import useCart from "../hooks/use-cart"

export default function CartStatus() {
  const { openCart, cartQuantity } = useShoppingCart()
  const {
    cartQuery: { data: products },
  } = useCart()

  return (
    <div className="relative">
      {cartQuantity > 0 && (
        <>
          <HiOutlineShoppingBag
            className="w-10 h-10 text-4xl "
            onClick={openCart}
          />
          <div className="w-6 h-6 d-flex justify-center items-center text-center text-brand font-bold rounded-full absolute -top-2 -right-2">
            {cartQuantity}
          </div>
        </>
      )}
      {/* )} */}
      {/* {products && ( */}
    </div>
  )
}
