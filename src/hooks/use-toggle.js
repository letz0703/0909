import { useState, useEffect } from "react"

//function here

export default function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue)

  function toggleValue(value) {
    // setValue(true)
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    )
  }
  return [value, toggleValue]
}

