import {useQuery} from "@tanstack/react-query"
// import {useState, useEffect, useRef} from "react"
import ProductCard from "./ProductCard"
//import styles from './Products.module.css'
import {getProducts} from "../api/firebase"

export default function Products() {
  // move below under export default
  const {data: products, isLoading, error} = useQuery(["products"], getProducts)
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4
      gap-4 p-4
      "
      >
        {products &&
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  )
}
