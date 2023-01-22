import { useState, useEffect } from "react"

export const usePop = (initialValue) => {
  const [isOpen, setIsOpen] = useState(initialValue)

  const open = () => {
    setIsOpen(false)
  }

  const close = () => {
    setIsOpen(true)
  }

  return [isOpen]
}
