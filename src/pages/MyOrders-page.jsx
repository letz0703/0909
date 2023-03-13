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

const FormatTIME = (timestamp) => {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return `${year}-${month}-${day} ${hours}:${minutes}`
}

export default function MyOrders() {
  const { uid, login } = useAuthContext()
  const [orders, setOrders] = useState([])
  const [japitems] = useJapitems()
  // const [itemsInCart, setItemsInCart] = useState(null)
  // console.log(SPECIALS)
  // const [myOrders, setMyOrders] = useState([])

  // const { uid } = useAuthContext()

  async function get_rdb_my_orders(userId) {
    return get(ref(database, `carts/${userId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const data = Object.values(snapshot.val())
        // setItemsInCart(
        //   data.map((cart) => {
        //     return cart.cartItems
        //   })
        // )
        setOrders(data)
      }
    })
  }

  function getItemInfo(itemId) {
    const { name, imgUrl } = japitems.find((r) => r.id == itemId).name
  }
  // async function getJorderInfo(id) {
  //   const snapshot = await get(ref(database, `jorders/${id}`))
  //   if (snapshot.exists()) {
  //     console.log("snapshot.val():", snapshot.val())
  //     // return snapshot.val().name
  //   } else {
  //     throw new Error("order not found.")
  //   }
  // }

  useEffect(() => {
    get_rdb_my_orders(uid)
  }, [uid])

  return (
    <div className="내주문 mt-[10.5vh] lg:mt-[7.5vh]">
      <h1>주문 내역</h1>
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
          <div key={order.orderDate}>
            <div>{FormatTIME(order.orderDate)}</div>
            <hr />
            <div className="p-2 mb-4">
              {
                order.cartItems.map((row) => (
                  <div
                    key={crypto.randomUUID()}
                    className="flex flex-row items-center m-2 justify-start"
                  >
                    <img
                      src={japitems.find((r) => r.id == row.id).imgUrl}
                      className="w-20 mr-3"
                      // width="100px"
                    />
                    {japitems.find((r) => r.id == row.id).name}
                    <span className="mx-4">id:{row.id}</span>
                    <span>qty: {row.quantity}</span>
                  </div>
                ))
                // orders.cartItems.map((item) => {
                //   return item.map((row) => {
                //     const res_item = { id: row.id, quantity: row.quantity }
                //     // const { id, quantity } = res_item
                //     return (
                //       <div
                //         key={res_item.id}
                //         className="bg-blue-100 grid  grid-cols-2 "
                //       >
                //         <div>id:{res_item.id}</div>
                //         <div>qty:{res_item.quantity}</div>
                //       </div>
                //     )
                //   })
                // return {
                //   ...item,
                //   id: item.id,
                //   quanity: item.quantity,
                // }
              }
              {/* )} */}
              {/* <span>{id}</span> */}
            </div>
          </div>
        ))}
      </div>

      {/* <div>{console.log(Array.isArray(itemsInCart))}</div> */}
    </div>
    // <div>
    //   <h1>Monlty JAP items</h1>
    //   <pre>1월의 공동구매 아이템: 캬베진 300정, 10,000원 </pre>
    //   <div>
    //     {specailsQuery.data.map((order) => (
    //       <div key={order.id}>itemId : {order.name}</div>
    //     ))}
    //   </div>
    //   <button onClick={() => specailsMutation.mutate("New Order")}>
    //     Add New Order
    //   </button>
    //   <style>{`
    // 	.navbar__input, .navbar__youtube-icon{
    // 		display: none;
    // 	}
    // `}</style>
    // </div>
  )
}
