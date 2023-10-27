import { getOrders } from "./firebase"

export async function getMyOrders(userId, options) {
  const a = await getOrders(userId)
  console.log("hi")
}
