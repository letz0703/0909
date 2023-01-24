import { useState, useEffect, useRef } from "react"
import ImageSlider from "../image-slider/image-slider"
export default function Slide() {
  const slides = [
    { url: "/imgs/price.jpg", title: "price" },
    { url: "/imgs/promise.jpg", title: "promise" },
    { url: "/imgs/cart.jpg", title: "cart" },
  ]

  const containerStyle = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
    // backgroundColor: "gray",
  }
  return (
    <>
      <h1>Slide</h1>
      <div style={containerStyle}>
        <ImageSlider slides={slides} />
      </div>
    </>
  )
}
