import { useEffect, useRef, useState } from "react"
import { database, getCarts } from "../api/firebase"
import { now } from "moment/moment"
import { ref, update } from "firebase/database"

const FormatTIME = (timestamp) => {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`
}
export default function IcORders() {
  const [orders, setOrders] = useState([])

  function handleUpdateDelivery(userId, cartId) {
    const now = new Date()
    const deliveryDate = now.getTime()
    //const currentTime = now.toLocaleDateString()
    //prompt("now:", currentTime)
    update(ref(database, `carts/${userId}/${cartId}`), {
      status: "배송완료",
      deliveryDate: deliveryDate,
    }).catch((error) => console.log(error))
  }
  useEffect(() => {
    async function fetchCarts() {
      const data = await getCarts()
      setOrders(data)
    }
    fetchCarts()
  }, [])
  return (
    <div>
      {orders.map((order) => (
        // <div key={order.cartId}>
        <div key={crypto.randomUUID()}>
          {/* <div>{FormatTIME(order.orderDate)}</div> */}
          <div>
            {Object.values(order).map((val) => (
              <div key={crypto.randomUUID()}>
                <div className={`bg-red-300`}>주문자ID: {val.userId}</div>
                <div>주문일: {FormatTIME(val.orderDate)}</div>
                <span>주문상태:{val.status}</span>
                <div>
                  delivery date:{" "}
                  {val.deliveryDate ? FormatTIME(val.deliveryDate) : "N/A"}
                  {/*{FormatTIME(val.deliveryDate && val.deliveryDate)}*/}
                </div>
                {/*<div>delivery date: {FormatTIME(new Date())}</div>*/}
                <div>금액: {val.total}</div>
                <div>배송지:{val.addressTo}</div>
                {/*<span>CartID:{val.cartId}</span>*/}
                {/*<span>사용자ID:{val?.userId}</span>*/}
                <button
                  type="submit"
                  className={`btn red`}
                  onClick={() => handleUpdateDelivery(val.userId, val.cartId)}
                >
                  배송완료
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
