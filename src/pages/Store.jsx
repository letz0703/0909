import { useContext } from "react"
import { SearchContext } from "../App"
import Products from "../components/Products"
import { useJapitems } from "../hooks/use-japitems"

export default function Store() {
  const { search } = useContext(SearchContext)
  const [japitems, setJapitems] = useJapitems()
  return (
    <>
      <h1 className="text-red-600">깡통시장 구매 대행(shop)</h1>
      <Products />
    </>
  )
}
