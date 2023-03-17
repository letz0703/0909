import { useState, useEffect } from "react"

export function useLogger() {
  useEffect(() => {
    console.log("value:", value)
  }, [value])
}
