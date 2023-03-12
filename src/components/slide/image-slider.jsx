import { useState, useEffect, useRef } from "react"
import { useNavigate, useNavigationType } from "react-router-dom"
import { useAuthContext } from "../../context/AuthContext"
import { FcGoogle } from "react-icons/fc"
import { useShoppingCart } from "../../context/ShoppingCartContext"

function ImageSlider({ slides }) {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const { login, user } = useAuthContext()
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

  const { openCart } = useShoppingCart()
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

        <div className="모바일 imageSlider__para relative">
          <div className="bg-cover">
            <div className="lg:hidden">
              {!user && (
                <>
                  <div className="px-3 p-3 pb-0 text-xl ">CanMart Busan</div>
                  <div className="p-3 text-sm ">login for price info.</div>
                  <div className="grid grid-cols-3">
                    <button
                      className="px-3 btn left-10 mini red mb-3"
                      onClick={() => login()}
                    >
                      login
                    </button>
                    <div></div>
                    <div></div>
                  </div>
                </>
              )}
            </div>
            {user && (
              <>
                <div
                  className="cursor-pointer absolute md:hidden left-20 bg-red-400 p-3 rounded-b-2xl"
                  // style={{ height: "100%" }}
                  onClick={openCart}
                >
                  카트보기
                </div>
                <div className="cursor-pointer absolute md:hidden left-20 top-16 bg-lime-600 p-3 rounded-full ">
                  주문내역
                </div>
              </>
            )}
            {user && (
              <div className=" absolute  left-20 hidden md:block bg-red-400 p-3 rounded-b-2xl">
                <div className="text-4xl font-semibold pt-2 m-4">
                  공 동 구 매
                </div>
                {/* <div className="text-2xl mb-3">개인통관번호만 있으면</div> */}
                <div className="text-2xl bg-black p-3 text-white m-2 rounded-full font-bold">
                  {/* 곤약젤리 복숭아 2개 */}
                  1만원 할인
                </div>
                <div className="mb-3 text-2xl">배송비 무료/익일 수령</div>
                <div className="mb-5">
                  향후 10일간 해외주문 계획이 없으신 분들만
                  <br /> 신청하세요
                  <button
                    className="px-3 btn left-10 mini yellow"
                    onClick={() => navigate("/jap")}
                  >
                    상세보기
                  </button>
                  <div></div>
                  <div></div>
                </div>

                {/* <div className="text-xl"> */}
                {/* 깡통시장 제품들을 보시려면 로그인 하세요 */}
                {/* </div> */}
              </div>
            )}
            {!user && (
              <>
                <div className=" absolute  left-20 hidden md:block bg-white p-3 rounded-b-2xl">
                  <div className="text-4xl pt-2 m-4 font-semibold">
                    i.canmart
                  </div>
                  {/* <div className="text-2xl mb-3">개인통관번호만 있으면</div> */}
                  <div className="text-2xl bg-black p-3 text-white m-2 rounded-full  ">
                    {/* 곤약젤리 복숭아 2개 */}
                    price info
                  </div>
                  {/* <div className="mb-3 text-2xl">제품 검색</div> */}
                  <div className="flex flex-row items-center justify-center">
                    <div className="text-xl grid">
                      <FcGoogle style={{ fontSize: "20px" }} />
                    </div>
                    <div>
                      <button
                        className="btn red text-white"
                        onClick={() => login()}
                      >
                        login
                      </button>
                    </div>
                  </div>
                  {/* <div className="text-xl"> */}
                  {/* 깡통시장 제품들을 보시려면 로그인 하세요 */}
                  {/* </div> */}
                  <div className="my-4 flex justify-center ">
                    <img
                      src="./imgs/ic_barcode.svg"
                      style={{ width: "10rem" }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* </div> */}
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
