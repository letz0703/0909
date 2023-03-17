import { useContext, useEffect } from "react"
import { SearchContext } from "../App"
import JorderQuery from "../components/jorder-special/jorder-special"
import Products from "../components/Products"
import SearchInput from "../components/search-input/search-input"
import Slide from "../components/slide/slide"
import { useAuthContext } from "../context/AuthContext"
import { useJapitems } from "../hooks/use-japitems"
import { useLogger } from "../hooks/use-logger"
import Store from "./Store"

export default function ShopHome() {
  const { user } = useAuthContext()
  const { search } = useContext(SearchContext)
  const [japitems, setJapitems] = useJapitems()
  useEffect(() => {}, [user])
  return (
    <div>
      {/* {useLogger(search)} */}
      <Slide />
      {user && <Products />}
    </div>
  )
}
