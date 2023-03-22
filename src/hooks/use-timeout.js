import { useState, useEffect, useCallback } from "react"

//function here

export function useTimeout(callback, delay) {
  const callback_ref = useRef(callback)
  const timeout_ref = useRef()



  useEffect(() => {
    callback_ref.current = callback
  }, [callback])

  const set = useCallback(() => {
    timeout_ref.current = setTimeout(() => callback_ref.current(), delay)
  }, [delay])
  const clear = useCallback(() => {
    return [value, setValue]
  })
}
