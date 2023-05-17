import { useEffect, useRef, useState } from "react"
import { getCarts } from "../api/firebase"
import { now } from "moment/moment"

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
                <div>{FormatTIME(val.orderDate)}</div>
                <div>delivery date: {FormatTIME(new Date())}</div>
                <div>금액: {val.total}</div>
                <div>
                  금액:{" "}
                  {val.cartItems.map((i) => {
                    console.log(i)
                  })}
                </div>
                <span>배송지:{val.addressTo}</span>
                <span>CartID:{val.cartId}</span>
                <span>사용자ID:{val.userID}</span>
                <span>현재:{val.status}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
