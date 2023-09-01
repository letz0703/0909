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
      japitem: {
        id,
        code,
        name,
        price,
        imgUrl,
        description,
        homeUrl,
        qty,
        comment,
      },
    },
  } = useLocation()
  const navigate = useNavigate()

  const { increaseCartQuantity } = useShoppingCart()

  const [itemQty, setItemQty] = useState(qty)
  const [itemPrice, setItemPrice] = useState(0)
  async function updateQty(prev) {
    updateQuantity(prev, itemQty)
  }
  async function updatePrice(prev) {
    updateFBPrice(prev, itemPrice)
  }
  const handleDamGi = () => {
    increaseCartQuantity(japitem.id)
    window.location.replace("/shop")
  }

  useEffect(() => {
    document.title = name
  }, [])

  return (
    <div className="japitem-detail flex justify-center">
      <div className="mt-[5rem]">
        <h1>{name}</h1>
      </div>
      <div className="transition-all  flex flex-col">
        {/* <img src={imgUrl} className="japitem-detail__imageDetail " /> */}
        <div className="align-self-center">
          <img
            src={
              !japitem.imgs.includes("https")
                ? "../../imgs/" + japitem.imgs
                : "../" + japitem.imgs
            }
            className="japitem-detail__imageDetail "
            style={{ minWidth: "300px" }}
          />
        </div>
        <div>{description}</div>
        <br />
        <span
          className="btn btn--primary blue mini"
          onClick={() => {
            homeUrl && window.open(`${homeUrl}`, `_blank`)
          }}
          // onClick={() => window.location.replace(`${homeUrl}`)}
        >
          홈페이지
        </span>
        <span
          className="btn btn--primary red mini"
          // onClick={() =>
          //   window.open(
          //     "https://twitter.com/icanmart/status/1636579089107783680/photo/1",
          //     `_blank`
          //   )
          // }
          onClick={() => window.open(`${comment}`, `_blank`)}
          // onClick={() => window.location.replace(`${homeUrl}`)}
        >
          제품 설명
        </span>
        <div>
          <div className="mt-4">재고:{itemQty}</div>
          {isAdmin && (
            <>
              <input
                type="number"
                onChange={(e) => setItemQty(e.target.value)}
              />
              <button
                className="btn red mini"
                type="submit"
                onClick={() => updateQty(japitem)}
              >
                up Quantity
              </button>
              <input
                type="number"
                onChange={(e) => setItemPrice(e.target.value)}
              />
              <button
                className="btn red mini"
                type="submit"
                onClick={() => updatePrice(japitem)}
              >
                up Price
              </button>
            </>
          )}
        </div>
        <br />
        <span className="ml-2 text-red-500 font-bold">
          {FormatCurrency(japitem.price)}
        </span>
        <div>{homeUrl?.homeUrl || null}</div>
        <div>
          <button className="btn btn--primary mini" onClick={handleDamGi}>
            담기
          </button>
          <button
            className="btn red mini text-white"
            onClick={() => window.history.back()}
            //onClick={() => <Link to=".." relative="path" />}
            //onClick={() => window.location.replace(document.referrer)}
          >
            x
          </button>
        </div>
      </div>
      <style>{`
			.japitem-detail {
				display: grid;
				place-items:center;
        color: var(--color-primary-green);
			}
			.japitem-detail>img{
				// width: 30rem;
			}
      .japitem-detail__imageDetail {
        width: 500px;
      }
			`}</style>
    </div>
  )
}
