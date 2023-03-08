import { use, useEffect, useState } from "react"
import { useQuery, useMutation } from "@tanstack/react-query"
import { collection, getDoc, getDocs } from "firebase/firestore"
import { database, db, getJorder } from "../api/firebase"
import Wait from "../util/wait"
import { useAuthContext } from "../context/AuthContext"
import { useLocation } from "react-router-dom"
import { get, ref } from "firebase/database"
import FormatTIME from "../util/formatTime"

// const SPECIALS = [
//   { id: 1, itemId: "2301-01", name: "JP-캬베진 300정", price: 10000 },
//   { id: 2, itemId: "2301-02", name: "동전파스 156매 3개", price: 10000 },
// ]

export default function MyOrders() {
  const { uid, login } = useAuthContext()
  const [orders, setOrders] = useState([])
  // console.log(SPECIALS)
  // const [myOrders, setMyOrders] = useState([])

  // const { uid } = useAuthContext()

  async function get_rdb_my_orders(userId) {
    return get(ref(database, `carts/${userId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const data = Object.values(snapshot.val())
        console.log("data", data)
        setOrders((prev) => [...prev, ...data])
      }
      // return []
    })
  }

  useEffect(() => {
    get_rdb_my_orders(uid)
  }, [uid])

  // const specailsQuery = useQuery({
  //   queryKey: ["specails"],
  //   queryFn: () => Wait(1000).then(() => [...SPECIALS]),
  //   // queryFn: () => Promise.reject("Error"),
  // })

  // const specailsMutation = useMutation({
  //   mutationFn: (itemId) =>
  //     Wait(1000).then(() =>
  //       SPECIALS.push({
  //         id: crypto.randomUUID(),
  //         itemId: Date(),
  //         name: "New Name",
  //         price: 10000,
  //       })
  //     ),
  // })

  // if (specailsQuery.isLoading) return <h1>Loading...</h1>
  // if (specailsQuery.isError)
  //   return <pre>{JSON.stringify(specailsQuery.error)}</pre>
  return (
    <>
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
      <div>
        {orders.map((r) => (
          <div key={crypto.randomUUID()}>
            <div>{FormatTIME(r.orderDate)}</div>
          </div>
        ))}
      </div>
    </>
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
