import { useState, useEffect, useRef } from "react"

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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
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
        <div className="dots-container flex flex-row justify-center">
          {slides.map((slide, slideIndex) => (
            <span
              key={slideIndex}
              className="dots"
              onClick={() => goToSlide(slideIndex)}
            >
              <button className="btn  mini">{slide.title}</button>
              {/* <img src="/imgs/circle.svg" className="w-20 px-3" /> */}
            </span>
          ))}
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
      .dots {
        left:0;
        margin: 0 3px;
        cursor: pointer;
        font-size: 20px;
        width: 3rem;
      }
      `}</style>
    </>
  )
}

export default ImageSlider
