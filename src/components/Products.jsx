// import { useAuthContext } from "../../context/AuthContext"
import { v4 as uuidv4 } from "uuid"
import { useContext, useEffect, useState } from "react"
import FormatCurrency from "../util/formatCurrency"
import { SearchContext } from "../App"
import { useNavigate } from "react-router-dom"
import useProducts from "../hooks/use-products"
import { useLocalStorage } from "../hooks/use-local-storage"
import { useJapitems } from "../hooks/use-japitems"

export default function Products() {
  const { search } = useContext(SearchContext)
  const [japitems, setJapitems] = useJapitems()
  const navigate = useNavigate()

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
              className="new-product__list place-content-center text-center card"
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
            </div>

            <style>{`
          .shop-home{
            display: grid;
            grid-template-columns: repeat(4, 12rem);
            border-bottom: 1px dashed black;
            padding: 2rem;
            cursor: pointer;
          }
          .new-product__list-image{
            width: 10rem;
            cursor: pointer;
          }

          `}</style>
          </div>
        ))}
    </div>
  )
}
