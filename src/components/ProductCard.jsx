import {useState, useEffect, useRef} from "react"
import Products from "./Products"
//import styles from './ProductCard.module.css'
export default function ProductCard({
  product: {id, image, title, category, price}
}) {
  return (
    <li className="rounded-lg shadow-md overflow-hidden cursor-pointer">
      <img src={image} alt={title} className="w-full" />
      <div className="mt-2 px-2 text-lg flex flex-col justify-center items-center">
        <h3 className="font-semibold line-clamp-1">{title}</h3>
        <p>{price}</p>
      </div>
      <p className="my-4 mx-4 flex justify-end text-sm text-gray-600">
        category: {category}
      </p>
    </li>
  )
}
