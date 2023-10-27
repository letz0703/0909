import { useLoaderData } from "react-router-dom"
import { getMyOrder, getRDB_user } from "../api/firebase"

function MyOrders() {
  const { user } = useLoaderData()
  return <h1>MyOrders</h1>
}

async function loader({ request: { signal }, params: { userId } }) {
  const user = getRDB_user(userId, { signal })
  const myOrders = await getMyOrder(user?.id, { signal })
  return { myOrders, user: await user }
}

export const myOrderRoute = {
  loader,
  element: <MyOrders />,
}
