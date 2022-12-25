import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import {addOrUpdateToCart, getCart, removeFromCart} from "../api/firebase"
import {useAuthContext} from "../context/AuthContext"

export default function useCart() {
  const {uid} = useAuthContext()
  const queryClient = useQueryClient()

  const cartQuery = useQuery(["carts", uid || ""], () => getCart(uid), {
    enabled: !!uid
    // ※ https://www.codingem.com/javascript-double-exclamation-operator/ double exclamation mark
    // object to boolean
  })

  const addOrUpdateItem = useMutation(
    product => addOrUpdateToCart(uid, product),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["carts", uid])
        // login사용자의 cache만 invalidate ↑
      }
    }
  )

  const removeItem = useMutation(id => removeFromCart(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["carts", uid])
    }
  })

  return {cartQuery, addOrUpdateItem, removeItem}
}
