import { useAuthContext } from "../../context/AuthContext"
import { v4 as uuidv4 } from "uuid"
import { getOrders, database, db } from "../../api/firebase"
import { useEffect, useState } from "react"
import { getDocs, collection } from "firebase/firestore"

export default function Orders() {
  const { user, uid } = useAuthContext()
  const [orders, setOrders] = useState([])
  const ordersRef = collection(db, "orders") //itemName, userId

  useEffect(() => {
    const getOrders = async () => {
      const data = await getDocs(ordersRef)
      console.log(data)
    }
  }, [])

  console.log(orders)

  return (
    <>
      {orders &&
        orders.map((order) => <div key={uuidv4()}>{order.userId}</div>)}
    </>
  )
}
