import { useState, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import FormatCurrency from "../util/formatCurrency"
import { useNavigate } from "react-router-dom"
import { updateQuantity, updateFBPrice } from "../api/firebase"
import { useAuthContext } from "../context/AuthContext"

// import { useShoppingCart } from "../context/ShoppingCartContext"
export default function JapitemDetail() {
  const { isAdmin } = useAuthContext()
  const {
    state: {
      japitem,
      japitem: { id, code, name, price, imgUrl, description, homeUrl, qty },
    },
  } = useLocation()
  const navigate = useNavigate()

  const { increaseCartQuantity } = useShoppingCart()

  const [itemQty, setItemQty] = useState(qty)
  const [itemPrice, setItemPrice] = useState("")
  async function updateQty(prev) {
    updateQuantity(prev, itemQty)
  }
  async function updatePrice(prev) {
    updateFBPrice(prev, itemPrice)
  }

  return (
    <div className="japitem-detail">
      <h1>{name}</h1>
      <div className="transition-all hover:scale-105">
        <img src={imgUrl} />
        <span>{description}</span>
        <br />
        <span
          className="btn btn--primary blue mini"
          onClick={() => window.location.replace(`${homeUrl}`)}
        >
          상세 설명
        </span>
        <div>재고:{itemQty}</div>
        {isAdmin && (
          <>
            <input type="number" onChange={(e) => setItemQty(e.target.value)} />
            <button
              className="btn blue mini"
              type="submit"
              onClick={() => updateQty(japitem)}
            >
              up quantity
            </button>
            <input
              type="number"
              onChange={(e) => setItemPrice(e.target.value)}
            />
            <button
              className="btn blue mini"
              type="submit"
              onClick={() => updatePrice(japitem)}
            >
              up Price
            </button>
          </>
        )}

        <br />
        <span className="ml-2 text-red-500 font-bold">
          {FormatCurrency(price)}
        </span>
        <div>{homeUrl?.homeUrl || null}</div>
        <button
          className="btn btn--primary mini"
          onClick={() => increaseCartQuantity(japitem.id)}
        >
          담기
        </button>
      </div>
      <style>{`
			.japitem-detail {
				display: grid;
				place-items:center;
        color: var(--color-primary-green);
			}
			.japitem-detail>img{
				width: 30rem;
			}
			`}</style>
    </div>
  )
}
