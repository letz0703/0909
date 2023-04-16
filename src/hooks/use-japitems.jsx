import { database } from "../api/firebase"
import { ref, get } from "firebase/database"
import { useEffect } from "react"
import { useLocalStorage } from "../hooks/use-local-storage"
import { useDeferredValue } from "react"

export const useJapitems = () => {
  const [japitems, setJapitems] = useLocalStorage("japitems", [])

  const japitems_def = useDeferredValue(japitems)

  useEffect(() => {
    get(ref(database, "japitems")).then((snapshot) => {
      if (snapshot.exists()) {
        setJapitems(Object.values(snapshot.val()))
      }
    })
  }, [])

  return [japitems, setJapitems]
}
