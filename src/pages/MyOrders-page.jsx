import { use, useEffect, useState } from "react"
// import { useQuery, useMutation } from "@tanstack/react-query"
// import { collection, getDoc, getDocs } from "firebase/firestore"
import { database, db, getJorder } from "../api/firebase"
import Wait from "../util/wait"
import { useAuthContext } from "../context/AuthContext"
// import { useLocation } from "react-router-dom"
import { get, ref } from "firebase/database"
import { useJapitems } from "../hooks/use-japitems"
// import FormatTIME from "../util/formatTime"
import FormatCurrency from "../util/formatCurrency"
import { info } from "autoprefixer"

const FormatTIME = (timestamp) => {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`
}

export default function MyOrders() {
  const { uid, login } = useAuthContext()
  const [orders, setOrders] = useState([])
  const [japitems] = useJapitems()

  async function get_rdb_my_orders(userId) {
    return get(ref(database, `carts/${userId}/`)).then((snapshot) => {
      if (snapshot.exists()) {
        const data = Object.values(snapshot.val())
        setOrders(data)
        return data
      }
    })
  }

  useEffect(() => {
    get_rdb_my_orders(uid)
  }, [uid])

  //TODO
  /**
   * 1: get orders from firebase
   */

  console.log("orders:", orders)
  return (
    <div className="내주문 mt-[10.5vh]  lg:mt-[8.5vh]">
      <h1 className="md:mt-[14vh] lg:mt-[9vh]">주문 내역</h1>
      <p>
        {!uid && (
          <span
            onClick={login}
            className="btn btn--primary mini cursor-pointer"
          >
            login
          </span>
        )}
      </p>
      {orders.length === 0 && <div className="bg-red-100">no orders</div>}
      <div>
        {orders.map((order) => (
          <div key={order.cartId} className="p-5">
            {/* {console.log(order)} */}
            <div>{FormatTIME(order.orderDate)}</div>
            <hr />
            <div className="p-2 mb-4">
              {order.cartItems.map((row) => (
                <div
                  key={row.id}
                  className="flex flex-row items-center m-2 justify-start"
                >
                  <img
                    src={japitems.find((r) => r.id == row.id)?.imgUrl}
                    //src={japitems.find((r) => r.id == row.id)?.imgUrl}
                    className="w-20 mr-3"
                  />
                  {japitems.find((r) => r.id == row.id).name}
                  <span className="ml-2 text-blue-500 font-semibold">
                    {row.quantity} 개
                  </span>
                  <span className="ml-2 text-blue-500 font-semibold">
                    @{row.price}원
                  </span>
                </div>
              ))}
              <div className="font-semibold text-blue-500 text-2xl">
                total : {FormatCurrency(order.total)}
              </div>
              <div>배송지:{order.addressTo}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
