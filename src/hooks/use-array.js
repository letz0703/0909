import { useCallback, useState } from "react"

//function here

export default function useArray(initialValue) {
  const [array, setArray] = useState(initialValue)

  const push = useCallback((element) => {
    setArray((a) => [...a, element])
  }, [])

  const replace = useCallback((index, newElement) => {
    setArray((a) => {
      return [...a.slice(0, index), newElement, ...a.slice(index + 1)]
    })
  }, [])

  const filter = useCallback((callback) => {
    setArray((a) => a.filter(callback))
  }, [])

  const remove = useCallback((index) => {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length - 1)])
  }, [])

  const clear = useCallback(() => {
    setArray([])
  })

  const reset = useCallback(() => {
    setArray(initialValue)
  }, [initialValue])

  return { array, set: setArray, push, filter, remove, clear, reset }
}
