import { useState, useEffect, useRef } from "react"
import ImageSlider from "./image-slider"
export default function Slide() {
  const slides = [
    { url: "/imgs/price.jpg", title: "일본 주문대행(jap)" },
    { url: "/imgs/cart.jpg", title: "부산 깡통시장(canmart)" },
    // { url: "/imgs/promise.jpg", title: "스페셜(promise)" },
  ]

  const containerStyle = {
    objectFit: "cover",
    padding: "0.6rem",
    aspectRatio: "16/9",
  }

  return (
    <>
      <div style={containerStyle} className="slide">
        <ImageSlider slides={slides} />
      </div>
      <style>{`
        .slide{
        }
      `}</style>
    </>
  )
}
