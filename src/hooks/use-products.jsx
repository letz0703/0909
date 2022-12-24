import {useDebugValue, useEffect, useState} from "react"
import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query"

export default function useProducts() {
  // move below under export default

  const queryClient = useQueryClient()
  // move below under export default
  // const productsQuery = useQuery(["products"], fetchProducts, {
  //   staleTime: 1000 * 60
  // })
  const productsQuery = useQuery(["products"], fetchProducts, {
    staleTime: 1000 * 60
  })

    }
  )

  return {productsQuery, addProduct}
  // export default function useProducts({salesOnly}) {
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState()
  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   console.log("fetching....")
  //   setLoading(true)
  //   setError(undefined)
  //   fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴")
  //       setProducts(data)
  //     })
  //     .catch(e => setError("에러가 발생했음!"))
  //     .finally(() => setLoading(false))
  //   return () => {
  //     console.log("🧹 깨끗하게 청소하는 일들을 합니다.")
  //   }
  // }, [salesOnly])

  // return [products, loading, error]
  // return [loading, error, products]
}
