import { useContext, useEffect, useState } from "react"
import { SearchContext } from "../App"
import JorderQuery from "../components/jorder-special/jorder-special"
import Products from "../components/Products"
import SearchInput from "../components/search-input/search-input"
import Slide from "../components/slide/slide"
import { useAuthContext } from "../context/AuthContext"
import { useJapitems } from "../hooks/use-japitems"
import { useLogger } from "../hooks/use-logger"
import useToggle from "../hooks/use-toggle"
import Store from "./Store"

export default function ShopHome() {
  const { user } = useAuthContext()
  // const { search } = useContext(SearchContext)
  // const [japitems, setJapitems] = useJapitems()
  // const [isUser, toggleValue] = useToggle(false)
  // useEffect(() => {
  //   toggleValue()
  // }, [user])
  return (
    <div>
      {/* {console.log("value:", isUser)} */}
      <Slide />
      {user && <Products />}
    </div>
  )
}
