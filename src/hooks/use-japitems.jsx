import { database } from "../api/firebase"
import { ref, get, set } from "firebase/database"
import { useEffect } from "react"
import { useLocalStorage } from "../hooks/use-local-storage"
import { useState } from "react"

export const useJapitems = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [japitems, setJapitems] = useLocalStorage("japitems", [])

  function updateRDB_japitem() {
    //prompt("update rdb japitem")
    set(ref(database, `/japitems`), {
      ...japitems,
    }).catch((error) => console.log(error))
  }

  useEffect(() => {
    setIsLoading(true)
    const controller = new AbortController()
    fetch("products.json", {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then(setJapitems)
      .finally(() => setIsLoading(false))

    return updateRDB_japitem
  }, [])

  useEffect(() => {
    get(ref(database, "japitems")).then((snapshot) => {
      if (snapshot.exists()) {
        setJapitems(Object.values(snapshot.val()))
      }
    })
  }, [isLoading])
  return [japitems, setJapitems]
}
