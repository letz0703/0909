import { useState, useEffect } from "react"

//function here

export default function observer(initialValue) {
  const [value, setValue] = useState(initialValue)

  function Value() {}
  useEffect(() => {
    console.log("value:", value)
  }, [value])
  return [value, Value]
}
