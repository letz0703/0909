import { useState, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import FormatCurrency from "../util/formatCurrency"
// import { useShoppingCart } from "../context/ShoppingCartContext"

export default function JapitemDetail() {
  const {
    state: {
      japitem: { id, code, name, price, imgUrl, description },
    },
  } = useLocation()

  const { increaseCartQuantity } = useShoppingCart()

  return (
    <div className="japitem-detail">
      <h1>{name}</h1>
      <div>
        <img src={imgUrl} />
        <span>{description}</span>
        <span className="ml-2 text-red-500 font-bold">
          {FormatCurrency(price)}
        </span>
        <button
          className="btn btn--primary mini"
          onClick={() => increaseCartQuantity(id)}
        >
          담기
        </button>
      </div>
      <style>{`
			.japitem-detail {
				display: grid;
				place-items:center;
			}
			.japitem-detail>img{
				width: 30rem;
			}


			`}</style>
    </div>
  )
}
