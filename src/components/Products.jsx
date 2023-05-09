/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
// import { useAuthContext } from "../../context/AuthContext"
import { useContext, useEffect, useState, useCallback, useRef } from "react"
import FormatCurrency from "../util/formatCurrency"
import { SearchContext } from "../App"
import { useNavigate } from "react-router-dom"
import useProducts from "../hooks/use-products"
// import { useLocalStorage } from "../hooks/use-local-storage"
import { useJapitems } from "../hooks/use-japitems"
import { Row } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { useDetail } from "../context/DetailContext"
import { useAuthContext } from "../context/AuthContext"
import { signInWithPopup } from "firebase/auth"
import { login } from "../api/firebase"
import { useLogger } from "../hooks/use-logger"
import useDebounce from "../hooks/use-debounce"

export default function Products(product) {
  // const { isOpen_Detail, open_Detail, close_Detail } = useDetail()
  const { search } = useContext(SearchContext)
  const [japitems, setJapitems] = useJapitems()
  const { user, uid } = useAuthContext()
  const navigate = useNavigate()
  const { increaseCartQuantity, setCartItems } = useShoppingCart()
  const [mainItems, setMainItems] = useState(() => {
    return Object.values(product)
  })

  useEffect(() => {
    setMainItems(japitems)
  }, [uid])

  return (
    <div className="shop-home grid grid-cols-2 lg:grid-cols-5 gap-2 md:mt-[10vh] lg:mt-[5vh]">
      {mainItems
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.name.toLowerCase().includes(search)
        })
        .map((japitem) => (
          <div key={crypto.randomUUID()}>
            <div className="product__ flex justify-center space-around align-items-center  card h-100">
              <span className="max-w-[80%] truncate">{japitem.name}</span>
              <span className="text-orange-500 font-bold">
                {FormatCurrency(japitem.price)}
              </span>
              <span className="transition-all hover:scale-110 mt-auto">
                <img
                  src={japitem.imgUrl}
                  className="max-h-[150px]"
                  onClick={() => {
                    navigate(`/japitems/${japitem.id}`, { state: { japitem } })
                  }}
                />
              </span>

              {japitem.qty <= 0 ? (
                <button className="btn btn--danger mini text-xs ">품절</button>
              ) : (
                <button
                  className="btn btn--primary mini text-xs"
                  onClick={() => {
                    !user && login()
                    increaseCartQuantity(japitem.id)
                  }}
                >
                  담기
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  )
}
