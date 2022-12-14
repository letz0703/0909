import {useDebugValue, useEffect, useState} from "react"
import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query"
import {getProducts} from "../api/firebase"

export default function useProducts({salesOnly}) {
  // move below under export default

  const queryClient = useQueryClient()
  // move below under export default
  const getProducts = useQuery(["products"], getProducts, {
    staleTime: 1000 * 60
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [products, setProducts] = useState([])
  useEffect(() => {
    console.log("fetching....")
    setLoading(true)
    setError(undefined)
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then(res => res.json())
      .then(data => {
        console.log("π₯λ¨λν λ°μ΄ν°λ₯Ό λ€νΈμν¬μμ λ°μμ΄")
        setProducts(data)
      })
      .catch(e => setError("μλ¬κ° λ°μνμ!"))
      .finally(() => setLoading(false))
    return () => {
      console.log("π§Ή κΉ¨λνκ² μ²­μνλ μΌλ€μ ν©λλ€.")
    }
  }, [salesOnly])

  return [products, loading, error]
  // return [loading, error, products]
}
