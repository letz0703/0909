import { useState, useEffect, useRef } from "react"
import { useNavigate, useNavigationType } from "react-router-dom"

function ImageSlider({ slides }) {
  const navigate = useNavigate()
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
    // setCurrentIndex(slideIndex)
    navigate("/jap")
  }
  return (
    <>
      <div className="image-slider__main h-100 relative">
        {/* <div className="arrow arrow-left">{<BsFillArrowLeftCircleFill />}</div> */}
        {/* <div className="arrow arrow-left" onClick={goToPrevious}>
          <img src="/imgs/left.svg" />
        </div> */}
        <div style={sliderStyles}></div>
        {/* <div className="arrow arrow-right" onClick={goToNext}> */}
        {/* {<BsFillArrowRightCircleFill />} */}
        {/* <img src="/imgs/right.svg" /> */}
        {/* </div> */}
        <div className="dots-container flex flex-row justify-center relative">
          {slides.map((slide, slideIndex) => (
            <span
              key={slideIndex}
              className="dots top-30 "
              onClick={() => goToSlide(slideIndex)}
            >
              <button className="btn gray mini top-20">
                {/* <button className="btn border-bottom btn--jap__primary-header absolute top-20  "> */}
                {slide.title}
              </button>
              {/* <img src="/imgs/circle.svg" className="w-20 px-3" /> */}
              <div className="">{slide.para}</div>
            </span>
          ))}
        </div>
        <div className="imageSlider__para w-96 relative">
          <div className="w-full h-full bg-cover"></div>
          <div className=" absolute w-full top-40 left-20">
            <div className="text-4xl mb-3">아주 특별한 가격</div>
            <div className="text-2xl mb-3">개인통관번호만 있으면</div>
            <div className="text-2xl">배송비 무료(해외,국내)</div>
            <div className="text-2xl">익일 수령</div>
            <div className="text-3xl bg-black p-2 px-1 text-white m-2">
              곤약젤리 복숭아 2개(컵형)
              <br />
              5,000원
            </div>
            <p>최소 향후 일주일간 해외주문 계획이 없으신 분들만 신청하세요</p>
            <button
              className="btn mini red mb-3"
              onClick={() => navigate("/jap")}
            >
              상세보기
            </button>
            <p>깡통시장 제품들을 보시려면 로그인 후</p>
            <p>새로고침 하세요</p>
          </div>
        </div>
      </div>
      <style>{`
      .image-slider__main {
        display: grid;
        grid-template-areas: "stack"
      }
      .image-slider__main > *{
        grid-area: stack;
      }

      .imageSlider__para{

      }

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
