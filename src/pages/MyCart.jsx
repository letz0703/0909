import CartItem from "../components/CartItem"
import { BsFillPlusCircleFill } from "react-icons/bs"
import { TiEquals } from "react-icons/ti"
import PriceCard from "../components/PriceCard"
import Button from "../components/ui/button"
import useCart from "../hooks/use-cart"
import { useOrders } from "../hooks/useOrders"
import { addNewOrder } from "../api/firebase"

const SHIPPING = 4000

export default function MyCart(props) {
  console.log(props)
  const { uid } = useAuthContext()
  const { data: japitems, isLoading } = useQuery(["carts"], () => getCart(uid))
  const { addNewCart } = useOrders()

  // const {
  //   cartQuery: { isLoading, data: japitems },
  // } = useCart()

  if (isLoading) return <p>Loading...</p>

  const hasJapitems = japitems && japitems.length > 0

  const totalPrice =
    japitems &&
    japitems.reduce((prev, cur) => prev + parseInt(cur.price) * cur.quantity, 0)

  const handleOrder = () => {
    // console.log(addNewOrder)
    addNewOrder()
  }

  return (
    <section className="p-8 flex flex-col">
      <h2 className="text-2xl text-center font-bold pb-4 border-b border-gray-300">
        My Cart
      </h2>
      {/* {!hasJapitems && <p>장바구니에 상품이 없습니다.</p>} */}
      {true && (
        <>
          <ul className="border-b border-gray-300 mb-8 p-4 px-14">
            {japitems &&
              japitems.map((japitem) => (
                <CartItem key={japitem.id} japitem={japitem} />
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
