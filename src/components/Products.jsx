// import { useAuthContext } from "../../context/AuthContext"
import { v4 as uuidv4 } from "uuid"
import { useContext, useEffect, useState } from "react"
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

export default function Products() {
  // const { isOpen_Detail, open_Detail, close_Detail } = useDetail()
  const { search } = useContext(SearchContext)
  const [japitems, setJapitems] = useJapitems()
  const { user, uid } = useAuthContext()
  const navigate = useNavigate()
  const {
    // getItemQuantity,
    increaseCartQuantity,
    // decreaseCartQuantity,
    // removeFromCart,
    setCartItems,
  } = useShoppingCart()

  /**
   * cart reset 하기
   */
  // useEffect(() => {
  // setCartItems([])
  // }, [])

  useEffect(() => {
    // return navigate("/")
  }, [uid])
  return (
    <div className="shop-home grid grid-cols-2 lg:grid-cols-5 gap-2 md:mt-[1vh]">
      {japitems
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.name.toLowerCase().includes(search)
        })
        .map((japitem) => (
          <div key={uuidv4()}>
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
                {/* <img src={japitem.imgUrl} className="new-product__list-image" /> */}
              </span>
              <button
                className="btn btn--primary mini text-xs"
                onClick={() => {
                  !user && login()
                  increaseCartQuantity(japitem.id)
                }}
              >
                담기
              </button>
            </div>
          </div>
        ))}
    </div>
  )
}
