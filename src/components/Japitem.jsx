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
    <div className={`${styles.product}  flex flex-col items-stretch card `}>
      <div className="wrapper">
        <span className="max-w-[90%] truncate">{japitem.name}</span>
        <span className="text-orange-500 font-bold">
          {FormatCurrency(japitem.price)}
        </span>
        <span className="transition-all hover:scale-110 mt-auto align-self-center self-stretch">
          <img
            src={japitem.imgs}
            className="max-h-[150px] pt-3"
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
  )
}
