import { useEffect, useState } from "react"
export function UseOpenClose({ am, pm }) {
  function getCurrentTime() {
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    var seconds = now.getSeconds()
    return hours + ":" + seconds
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      return changePageByTime()
    }, 10)

    return () => clearTimeout(timeout)
  }, [])

  return [htmlOpenClose]
}
