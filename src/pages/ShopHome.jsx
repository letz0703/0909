import { useContext } from "react"
import { SearchContext } from "../App"
import JorderQuery from "../components/jorder-special/jorder-special"
import Products from "../components/Products"
import SearchInput from "../components/search-input/search-input"
import Slide from "../components/slide/slide"
import Store from "./Store"

export default function ShopHome() {
  const { search } = useContext(SearchContext)
  return (
    <div>
      {!search && <Slide />}
      <Products />
    </div>
  )
}
