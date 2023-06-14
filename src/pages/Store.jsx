import { useContext, useEffect, useState } from "react"
import { SearchContext } from "../App"
import Products from "../components/Products"
import { useJapitems } from "../hooks/use-japitems"

export default function Store() {
  const { search } = useContext(SearchContext)
  const [japitems, setJapitems] = useJapitems()
  const [curUrl, setCurUrl] = useState("")

  const getUrl = () => {
    setCurUrl(window.location.href)
  }

  useEffect(() => {
    getUrl()
  }, [curUrl.includes("store")])

  return (
    <>
      {/*<h1 className="text-red-600 hidden md:block">깡통시장 구매 대행(shop)</h1>*/}
      <Products />
    </>
  )
}
