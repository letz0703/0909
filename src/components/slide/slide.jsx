import { useState, useEffect, useRef } from "react"
import ImageSlider from "./image-slider"
export default function Slide() {
  const slides = [
    { url: "/imgs/cart.jpg", title: "cart" },
    { url: "/imgs/price.jpg", title: "price" },
    { url: "/imgs/promise.jpg", title: "promise" },
  ]

  const containerStyle = {
    width: "93vw",
    aspectRatio: "16/9",
    objectFit: "cover",
    margin: "0 auto",
    padding: "1rem",
  }

  return (
    <>
      <div style={containerStyle}>
        <ImageSlider slides={slides} />
      </div>
    </>
  )
}
