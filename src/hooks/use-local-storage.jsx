import { useState, useEffect } from "react"

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key))
  if (savedValue) return savedValue

  if (typeof initialValue === "function") return initialValue()
  // if (initialValue instanceof Function) return initialValue()
  return initialValue
}

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}
