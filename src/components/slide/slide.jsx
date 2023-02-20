import { useState, useEffect, useRef } from "react"
import ImageSlider from "./image-slider"
export default function Slide() {
  const slides = [
    {
      url: "/imgs/cart_ori.jpg",
      title: "STORE",
      para: "깡통시장",
    },
    {
      url: "/imgs/price_ori.jpg",
      title: "JAP",
      para: "일본현지",
    },
    // { url: "/imgs/promise.jpg", title: "스페셜(promise)" },
  ]

  const containerStyle = {
    objectFit: "cover",
    padding: "0.6rem",
    aspectRatio: "16/9",
  }

  return (
    <section className="slide__">
      <div style={containerStyle} className="slide">
        <ImageSlider slides={slides} />
      </div>

      <style>{`
        .slide__{
          overflow: hidden;
        }
        .slide{
        }
      `}</style>
    </section>
  )
}
