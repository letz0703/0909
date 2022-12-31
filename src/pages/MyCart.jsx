import CartItem from "../components/CartItem"
import {BsFillPlusCircleFill} from "react-icons/bs"
import {TiEquals} from "react-icons/ti"
import PriceCard from "../components/PriceCard"
import Button from "../components/ui/button"
import useCart from "../hooks/use-cart"
import {useOrders} from "../hooks/useOrders"
import {addNewOrder} from "../api/firebase"

const SHIPPING = 3000

export default function MyCart() {
  // const {uid} = useAuthContext()
  // const {data: products, isLoading} = useQuery(["carts"], () => getCart(uid))
  const {addOrder} = useOrders()

  const {
    cartQuery: {isLoading, data: products}
  } = useCart()

  if (isLoading) return <p>Loading...</p>

  const hasProducts = products && products.length > 0

  const totalPrice =
    products &&
    products.reduce((prev, cur) => prev + parseInt(cur.price) * cur.quantity, 0)

  const handleOrder = () => {
    // console.log(addNewOrder)
  }

  return (
    <section className="p-8 flex flex-col">
      <h2 className="text-2xl text-center font-bold pb-4 border-b border-gray-300">
        My Cart
      </h2>
      {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
      {hasProducts && (
        <>
          <ul className="border-b border-gray-300 mb-8 p-4 px-14">
            {products &&
              products.map(product => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className="flex justify-between items-center px-2 md:px-7 lg:px-11 mb-6">
            <PriceCard text="상품 총액" price={totalPrice} />
            <BsFillPlusCircleFill className="shrink-0" />
            <PriceCard text="배송액" price={SHIPPING} />
            <TiEquals className="shrink-0" />
            <PriceCard text="결재금액" price={totalPrice + SHIPPING} />
          </div>
          <Button text="주문하기" onClick={handleOrder} />
        </>
      )}
    </section>
  )
}
