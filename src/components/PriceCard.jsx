import {useState, useEffect, useRef} from "react"
import FormatCurrency from "../util/formatCurrency"
//import styles from './PriceCard.module.css'
export default function PriceCard({text, price}) {
  return (
    <div className="bg-gray-50 p-8 mx-2 rounded-2xl text-center text-lg md:text-xl">
      <p>{text}</p>
      <p className="text-brand font-bold text-xl md:text-2xl">
        {FormatCurrency(price)}
      </p>
    </div>
  )
}
