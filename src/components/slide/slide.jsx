import { useState, useEffect, useRef } from "react"
import ImageSlider from "./image-slider"
import { useAuthContext } from "../../context/AuthContext"

export default function Slide() {
  const { user } = useAuthContext()
  const slides = [
    // {
    //   url: "/imgs/cart_ori.jpg",
    //   title: "STORE",
    //   para: "깡통시장",
    // },
    {
      url: "/imgs/cart_ori.jpg",
      title: "Jap",
      para: "일본현지 공동구매",
    },
    // { url: "/imgs/promise.jpg", title: "스페셜(promise)" },
  ]

  const containerStyle = {
    objectFit: "cover",
    padding: "0.6rem",
    aspectRatio: "16/9",
  }

  return (
    // <section style={{ marginTop: "100px" }}>
    <section className="mt-[8.5vh] lg:mt-[11vh]">
      <div style={containerStyle} className="slide">
        <ImageSlider slides={slides} />
      </div>
    </section>
  )
}
