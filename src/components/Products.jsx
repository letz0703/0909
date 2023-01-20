// import { useAuthContext } from "../../context/AuthContext"
import { v4 as uuidv4 } from "uuid"
import { useContext, useEffect, useState } from "react"
import FormatCurrency from "../util/formatCurrency"
import { SearchContext } from "../App"
import { useNavigate } from "react-router-dom"
import useProducts from "../hooks/use-products"
import { useLocalStorage } from "../hooks/use-local-storage"
import { useJapitems } from "../hooks/use-japitems"
import { Row } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"

export default function Products() {
  const { search } = useContext(SearchContext)
  const [japitems, setJapitems] = useJapitems()
  const navigate = useNavigate()
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  return (
    <div className="shop-home grid gap-2">
      {japitems
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.name.toLowerCase().includes(search)
        })
        .map((japitem) => (
          <div key={uuidv4()}>
            <div
              className="new-product__list place-content-center text-center card items-center pb-2"
              onClick={() => {
                navigate(`/japitems/${japitem.id}`, { state: { japitem } })
              }}
            >
              <span>{japitem.name}</span>
              <span className="text-orange-500 font-bold">
                {FormatCurrency(japitem.price)}
              </span>
              <span>
                <img src={japitem.imgUrl} className="new-product__list-image" />
              </span>
              <button
                className="btn btn--primary mini text-xs"
                onClick={() => {
                  increaseCartQuantity(japitem.id)
                }}
              >
                담기
              </button>
            </div>

            <style>{`
          .shop-home{
            display: grid;
            grid-template-columns: repeat(5, auto);
            border-bottom: 1px dashed black;
            padding: 2rem;
            cursor: pointer;
          }
          .new-product__list-image{
            width: 10rem;
            margin-top: .9rem;
            cursor: pointer;
          }
          @media screen and (max-width: 700px){
            .shop-home {
              grid-template-columns: repeat(2, auto);
            }
          }

          `}</style>
          </div>
        ))}
    </div>
  )
}
