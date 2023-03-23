import { useState, useEffect, useCallback, useRef } from "react"

//function here

export default function useTimeout(callback, delay) {
  const callback_ref = useRef(callback)
  const timeout_ref = useRef()

  useEffect(() => {
    callback_ref.current = callback
  }, [callback])

  const set = useCallback(() => {
    timeout_ref.current = setTimeout(() => callback_ref.current(), delay)
  }, [delay])
  const clear = useCallback(() => {
    timeout_ref.current && clearTimeout(timeout_ref.current)
  }, [])

  useEffect(() => {
      set()
      return clear()
  }, [set,clear, delay]);

  const reset = useCallback(() => {
    clear()
    set()
  },[clear, set])

  return {reset, clear}
}

