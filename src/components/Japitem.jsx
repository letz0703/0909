import React from "react"
import FormatCurrency from "../util/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { useAuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import styles from "./Japitem.module.css"
import { ref, update } from "firebase/database"
import { database } from "../api/firebase"

export function Japitem({ japitem }) {
  const { increaseCartQuantity } = useShoppingCart()
  const { user } = useAuthContext()
  const navigate = useNavigate()

  function decrease_rdb_qty(japitem_id) {
    //console.log(japitem.qty--)
    update(ref(database, `japitems/${japitem_id}`), {
      qty: japitem.qty-- >= 0 ? japitem.qty-- : 0,
    }).catch((error) => console.log(error))
  }

  //const blurDivs = document.querySelectorAll(".blur_img")
  //blurDivs.forEach((div) => {
  //  const img = div.querySelector("img")
  //  function loaded() {
  //    div.classList.add("loaded")
  //  }
  //  if (img.complete) {
  //    loaded()
  //  } else {
  //    img.addEventListener("load", loaded)
  //  }
  //})

  return (
    <div className={`${styles.product}  flex flex-col items-stretch card`}>
      <div className="wrapper min-h-[10em] items-stretch">
        <div className="max-w-[100%] truncate my-2">
          {/*{japitem.enName
            ? !japitem.enName.includes(["wip"])
              ? japitem.enName
              : japitem.name
            : japitem.name}*/}
          {japitem.name}
        </div>
        <div className="text-orange-500 font-bold">
          {FormatCurrency(japitem.price)}
        </div>
        {user && (
          <span className="transition-all hover:scale-110  self-stretch">
            <div className={`${styles.grid}`}>
              <div
                className={`styles.blur_img`}
                //styles={{
                //  backgroundImage: `url(../../imgs/s/${japitem.img})`,
                //}}
              >
                <img
                  src={`imgs/${japitem.imgs}`}
                  className={`sm:max-h-[180px] lg:min-h-[170px] pt-3 mr-auto ml-auto
                  `}
                  onClick={() => {
                    navigate(`/japitems/${japitem.id}`, { state: { japitem } })
                  }}
                  //loading="lazy"
                />
              </div>
            </div>
          </span>
        )}
        {japitem.qty <= 0 ? (
          <button className="btn btn--danger mini text-xs ">품절</button>
        ) : (
          <button
            className="btn btn--primary mini text-sm"
            onClick={() => {
              !user && login()
              increaseCartQuantity(japitem.id)
              decrease_rdb_qty(japitem.id)
            }}
          >
            Add to cart
          </button>
        )}
      </div>
      <div>stock: {japitem.qty}</div>
    </div>
  )
}
