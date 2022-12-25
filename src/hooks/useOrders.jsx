import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query"
// import {addNewProduct, getProducts as fetchProducts} from "../api/firebase"
import {addNewOrder, getOrders as fetchOrders} from "../api/firebase"

export const useOrders = () => {
  const queryClient = useQueryClient()
  const ordersQuery = useQuery(["orders"], fetchOrders, {
    staleTime: 1000 * 60
  })

  const addOrder = useMutation(({product, url}) => addNewOrder(product, url), {
    onSuccess: () => queryClient.invalidateQueries(["orders"])
  })

  return [ordersQuery, addOrder]
}
