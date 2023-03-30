import { useEffect, useRef } from "react"

//function here

export default function useUpdatedEffect(callback, dependencies) {
  const firstRender = useRef(true)
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    return callback()
  }, dependencies)
}
