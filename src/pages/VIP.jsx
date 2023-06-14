import { useContext, useEffect, useState } from "react"
import { SearchContext } from "../App"
import Products from "../components/Products"
import { useJapitems } from "../hooks/use-japitems"
import { Info09 } from "./Info_09"
import { useAuthContext } from "../context/AuthContext"

export default function VIP() {
  const { search } = useContext(SearchContext)
  const [japitems, setJapitems] = useJapitems()
  const [curUrl, setCurUrl] = useState("")
  const { user, uid, login, logout } = useAuthContext()

  const getUrl = () => {
    setCurUrl(window.location.href)
  }

  useEffect(() => {
    getUrl()
  }, [curUrl.includes("store")])

  return (
    <div className={` `}>
      {/*<h1 className="text-red-600 hidden md:block">깡통시장 구매 대행(shop)</h1>*/}
      {!user && (
        <button onClick={login} className={`btn blue`}>
          주문 하시려면 login 하셔야 합니다
        </button>
      )}
      <Products />
    </div>
  )
}
