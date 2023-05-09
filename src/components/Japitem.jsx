import React from "react"
import FormatCurrency from "../util/formatCurrency"
//import styles from './Japitem.module.css'

export function Japitem({ japitem }) {
  return (
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
  )
}
