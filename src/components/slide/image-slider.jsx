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

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  return (
    <>
      <div className="h-100 relative">
        {/* <div className="arrow arrow-left">{<BsFillArrowLeftCircleFill />}</div> */}
        <div className="arrow arrow-left" onClick={goToPrevious}>
          <img src="/imgs/left.svg" />
        </div>
        <div style={sliderStyles}></div>
        <div className="arrow arrow-right" onClick={goToNext}>
          {/* {<BsFillArrowRightCircleFill />} */}
          <img src="/imgs/right.svg" />
        </div>
      </div>
      <style>{`
      .arrow {
        position: absolute;
        font-size: 45px;
        transform: translate(0, 50%);
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
