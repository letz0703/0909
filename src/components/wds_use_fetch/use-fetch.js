import { useEffect, useState } from "react"

//export function useFetch(url) {
export function useFetch(url, options = {}) {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  //function

  useEffect(() => {
    setData(undefined)
    setIsError(false)
    setIsLoading(true)

    const controller = new AbortController()

    fetch(url, { signal: controller.signal, ...options })
      //fetch(url, options)
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        }
        return Promise.reject(res)
      })
      .then(setData)
      .catch(() => {
        if (e.name === "AbortError") return
        setIsError(true)
      })
      .finally(() => {
        if (controller.signal.aborted) return
        setIsLoading(false)
      })

    return () => {
      controller.abort()
    }
  }, [url])

  return { data, isError, isLoading }
}
