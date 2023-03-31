import { useState, useEffect } from "react"

//function here

export default function useArray(initialValue) {
  const [array, setArray] = useState(initialValue)

  function push(element) {
    setArray((a) => [...a, element])
  }

  function filter(callback) {
    setArray((a) => a.filter(callback))
  }
  function update(index, newElement) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length - 1),
    ])

    function remove(index) {
      setArray((a) => [
        ...a.slice(0, index),
        ...a.slice(index + 1, a.length - 1),
      ])
    }

    function clear() {
      setArray([])
    }
    return { array, set: setArray, push, filter, update, remove, clear }
  }
}
