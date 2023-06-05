import { useState, useEffect, useRef } from "react"
import ImageSlider from "./image-slider"
import { useAuthContext } from "../../context/AuthContext"

export default function Slide() {
  // const { user } = useAuthContext()
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
    position: "relative",
    objectFit: "cover",
    padding: "0.6rem",
    //aspectRatio: "16/9",
  }

  const imageStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  }

  return (
    <section className="mt-[8.5vh] md:mt-[11vh] lg:mt-[100vh]">
      <div style={containerStyle} className="slide">
        <ImageSlider slides={slides} />
      </div>
      <style>{`
      .slide {
        position: relative;
      }
      `}</style>
    </section>
  )
}
