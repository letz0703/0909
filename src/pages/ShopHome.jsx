import { useContext, useEffect, useState } from "react"
// import { SearchContext } from "../App"
// import JorderQuery from "../components/jorder-special/jorder-special"
import Products from "../components/Products"
// import SearchInput from "../components/search-input/search-input"
import Slide from "../components/slide/slide"
// import { useAuthContext } from "../context/AuthContext"
// import { useJapitems } from "../hooks/use-japitems"
// import { useLogger } from "../hooks/use-logger"
// import useToggle from "../hooks/use-toggle"
// import Store from "./Store"
// import Test from "./Test"

export default function ShopHome() {
  // const { user } = useAuthContext()
  return (
    <div>
      <Slide className=".slide" />
      {/* <Test /> */}
      <Products />
      {/* {user && <Products />} */}
      <style>{`
          @media screen and (width> 1024px){
          .slide{
              display:none;
            }
          }
        }

      `}</style>
    </div>
  )
}
