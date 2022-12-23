import {useQuery} from "@tanstack/react-query"
import {HiOutlineShoppingBag} from "react-icons/hi"
import {getCart} from "../api/firebase"
import {useAuthContext} from "../context/Auth"

export default function CartStatus() {
  const {uid} = useAuthContext()
  const {data: products} = useQuery(["carts"], () => getCart(uid))
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
