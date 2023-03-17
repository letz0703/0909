import { useState, useEffect } from "react"

export function useLogger() {
  const [value, setValue] = useState()

  $1

  useEffect(() => {
    console.log("value:", value)
  }, [value])
  return { value, setValue }
}
