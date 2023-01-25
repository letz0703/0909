import { useState, useEffect, useRef } from "react"
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/Bs"

function ImageSlider({ slides }) {
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
      <div className="h-100 relative">
        <div className="arrow arrow-left">{<BsFillArrowLeftCircleFill />}</div>
        <div style={sliderStyles}></div>
        <div className="arrow arrow-right">
          {<BsFillArrowRightCircleFill />}
        </div>
      </div>
      <style>{`
      .arrow {
        position: absolute;
        font-size: 45px;
        transform: translate(0, 50%);
        color: white;
        transform: translate(0, 50%);
        top: 50%;
        cursor: pointer;
        z-index: 1;
      }
        .arrow-left{
          left: 32px;
        }
        .arrow-right{
          right: 32px;
        }
      }
      `}</style>
    </>
  )
}

export default ImageSlider
