import { useEffect, useId, useRef, useState } from "react"
import { database, getCarts, getTotal } from "../api/firebase"
import { now } from "moment/moment"
import { ref, update } from "firebase/database"
import { useAuthContext } from "../context/AuthContext"
//import { useLocalStorage } from "../hooks/use-local-storage"
import { useLocalStorage } from "../hooks/useLocalStorage"
import CartItem from "./CartItem"
import FormatCurrency from "../util/formatCurrency"
import { useReducer } from "react"

const FormatTIME = (timestamp) => {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`
}
const ACTIONS = {
  GET_ORDERS: "GET_ORDERS",
}

export default function IcORders() {
  //const [orders, setOrders] = useState([])
  const [icUser] = useLocalStorage("ic-user")
  /**
   * search Oders
   */
  //const initialState = []
  const [searchInput_order, setSearchInput_order] = useState("")
  function reducer(orders, { type, payload }) {
    switch (type) {
      case ACTIONS.GET_ORDERS:
        //const carts = async function fetchCarts() {
        const data = getCarts()
        //}
        console.log(data)
        return [...orders, {}]
      //fetchCarts()
      default:
        throw new Error(`No action Found for ${type}`)
    }
  }

  const [orders, dispatch] = useReducer(reducer, [], (initialValue) => {
    const value = localStorage.getItem("orders")
    if (value == null) return initialValue
    return JSON.parse(value)
  })
  /**
   * search Orders End
   */

  function getOrders() {
    orders && dispatch({ type: ACTIONS.GET_ORDERS, payload: {} })
  }

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
  function calculateTotal(cartItems) {
    let total = 0
    orders?.forEach((order) => {
      order.cartItems?.forEach((item) => {
        total += item.price * item.quantity
      })
    })
    return total
  }

  useEffect(() => {
    //async function fetchCarts() {
    //  const data = await getCarts()
    //  setOrders(data)
    //}
    //fetchCarts()
  }, [])

  return (
    <div>
      {orders?.map((order) => (
        // <div key={order.cartId}>
        <div key={crypto.randomUUID()}>
          {/* <div>{FormatTIME(order.orderDate)}</div> */}
          <div>
            {Object.values(order).map((val) => (
              <div key={crypto.randomUUID()}>
                {/*<div className={`bg-red-300`}>주문자ID: {val.userId}</div>*/}
                <div className={`bg-red-300`}>
                  주문자: {icUser.displayName}
                  <span>({icUser.phoneNumber})</span>
                </div>
                <div>주문일: {FormatTIME(val.orderDate)}</div>
                <span>주문상태:{val.status}</span>
                <div>
                  delivery date:{" "}
                  {val.deliveryDate ? FormatTIME(val.deliveryDate) : "N/A"}
                  {/*{FormatTIME(val.deliveryDate && val.deliveryDate)}*/}
                </div>
                {/*<div>delivery date: {FormatTIME(new Date())}</div>*/}
                <div>배송지:{val.addressTo}</div>
                {/*{console.log(`order`, Object.values(order))}*/}
                {/*<span>CartID:{val.cartId}</span>*/}
                {/*<span>사용자ID:{val?.userId}</span>*/}
                <h3>배송상품</h3>
                <div>
                  {val.cartItems?.map((item) => (
                    <CartItem {...item} key={crypto.randomUUID()} />
                  ))}
                </div>
                <div>금액: {FormatCurrency(val.total)}</div>
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
