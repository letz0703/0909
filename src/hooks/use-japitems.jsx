import { database } from "../api/firebase"
import { ref, get } from "firebase/database"
import { useEffect } from "react"
import { useLocalStorage } from "../hooks/use-local-storage"
import { useState } from "react"

export const useJapitems = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [japitems, setJapitems] = useLocalStorage("japitems", [])

  useEffect(() => {
    setIsLoading(true)

    const controller = new AbortController()
    fetch("products.json", {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then(setJapitems)
      .finally(() => setIsLoading(false))
    get(ref(database, "japitems")).then((snapshot) => {
      if (snapshot.exists()) {
        setJapitems(Object.values(snapshot.val()))
      }
    })
  }, [])

  return [japitems, setJapitems]
}
