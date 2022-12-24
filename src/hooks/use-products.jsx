import {useDebugValue, useEffect, useState} from "react"
import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query"
import {addNewProduct, getProducts as fetchProducts} from "../api/firebase"

export default function useProducts() {
  const queryClient = useQueryClient()
  const productsQuery = useQuery(["products"], fetchProducts, {
    staleTime: 1000 * 60
  })

  const addProduct = useMutation(
    ({product, url}) => addNewProduct(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(["products"])
    }
  )

  return {productsQuery, addProduct}
}
