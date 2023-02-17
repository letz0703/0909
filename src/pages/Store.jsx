import { useContext } from "react"
import { SearchContext } from "../App"
import Products from "../components/Products"
import { useJapitems } from "../hooks/use-japitems"

export default function Store() {
  const { search } = useContext(SearchContext)
  const [japitems, setJapitems] = useJapitems()
  return (
    <>
      <h1>Store</h1>
      <Products />
    </>
  )
}
