import { useState, useEffect, useRef } from "react"
export default function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  // const { url, title } = slides

  const slideContainerStyle = {
    height: "100%",
    position: "relative",
  }
  const sliderStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  }
  return (
    <>
      <h1>ImageSlider</h1>
      <div style={slideContainerStyle}>
        <div style={sliderStyles}></div>
      </div>
    </>
  )
}
