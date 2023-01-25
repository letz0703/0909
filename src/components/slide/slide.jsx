import { useState, useEffect, useRef } from "react"
import ImageSlider from "./image-slider"
export default function Slide() {
  const slides = [
    { url: "/imgs/cart.jpg", title: "부산 깡통시장(canmart)" },
    { url: "/imgs/price.jpg", title: "일본 주문대행(jap)" },
    // { url: "/imgs/promise.jpg", title: "스페셜(promise)" },
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
