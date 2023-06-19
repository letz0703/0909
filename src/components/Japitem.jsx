import React from "react"
import FormatCurrency from "../util/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { useAuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import styles from "./Japitem.module.css"

export function Japitem({ japitem }) {
  const { increaseCartQuantity, setCartItems } = useShoppingCart()
  const { user, uid } = useAuthContext()
  const navigate = useNavigate()

  return (
    <div className={`${styles.product}  flex flex-col items-stretch card`}>
      <div className="wrapper min-h-[10em] items-stretch">
        <div className="max-w-[100%] truncate">{japitem.name}</div>
        <div className="text-orange-500 font-bold">
          {FormatCurrency(japitem.price)}
        </div>
        <span className="transition-all hover:scale-110  self-stretch">
          <img
            src={japitem.imgs}
            className="sm:max-h-[180px] lg:min-h-[170px] pt-3 mr-auto ml-auto"
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
      <div>재고잔량: {japitem.qty}</div>
    </div>
  )
}
