import { useState, useEffect } from "react"

export function useLogger(value) {
  useEffect(() => {
    console.log("value:", value)
  })
}
