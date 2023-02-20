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

export default function Products() {
  // const { isOpen_Detail, open_Detail, close_Detail } = useDetail()
  const { search } = useContext(SearchContext)
  const [japitems, setJapitems] = useJapitems()
  const { user } = useAuthContext()
  const navigate = useNavigate()
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()

  return (
    <div className="shop-home grid grid-cols-5 gap-3">
      {japitems
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.name.toLowerCase().includes(search)
        })
        .map((japitem) => (
          <div key={uuidv4()}>
            <div
              // onClick={open_Detail}
              className="product__ flex justify-center space-around align-items-center pb-2 card"
              // className="new-product__list place-content-center text-center card items-center pb-2"
              onClick={() => {
                navigate(`/japitems/${japitem.id}`, { state: { japitem } })
              }}
            >
              <span className="max-w-[80%] truncate">{japitem.name}</span>
              <span className="text-orange-500 font-bold">
                {FormatCurrency(japitem.price)}
              </span>
              <span>
                <img src={japitem.imgUrl} className="new-product__list-image" />
              </span>
            </div>
            <button
              className="btn btn--primary mini text-xs"
              onClick={() => {
                !user && login()
                increaseCartQuantity(japitem.id)
              }}
            >
              담기
            </button>

            <style>{`
            .product__{
              max-content: max-width;
            }
          .shop-home{
            // max-width: max-content;

            // display: grid;
            // grid-template-columns: repeat(5, auto);
            // border-bottom: 1px dashed black;
            // padding: 2rem;
            // cursor: pointer;
          }
          .new-product__list-image{
            max-width: 10rem;
            margin-top: .9rem;
            cursor: pointer;
          }
          @media screen and (max-width: 1000px){
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
