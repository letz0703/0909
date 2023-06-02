import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import { FaSms } from "react-icons/fa"
export function Info09() {
  const { user, uid, login, logout } = useAuthContext()
  return (
    //prettier-ignore
    <section style={{width:"maxContent"}}>
        <h2>공동구매 안내</h2>
        <div className={`flex justify-center align-center`}>
        <pre className={`w-1/4 text-[1.4em] py-2`}>가장 신선한 제품을 최저가로</pre>
        </div>
        <div className="text">
        <p className={`pt-3`}>일반 해외주문은 7~10 이상 배송기간이 걸립니다</p>
        <p className={`underline sm:text-sm`} style={{lineHeight:"1.7"}}>
          지난 주 다른 고객이 일본에 주문한 제품이 오늘 저희쪽에 <br/>
          도착하고 그 제품을 고객님은 내일 받을 수 있다면 어떨까요?
        </p>
        <p>지금 깡통시장 오프라인 상품과 함께 주문 하고 다음날 받아보세요</p>
        자세한 내용은
        <button
          className="btn btn--primary red cursor-pointer text-red-700 p-2"
          onClick={() => (window.location.href = "/jap")}
        >
          jap09
        </button>
        를 참조하세요
        <p>
          <span className={`text-2xl`}>*</span>공동구매 상품이 없을 경우,
          깡통시장 상품을 보냅니다.
        </p>
        </div>
        <p>
          🛍️ 상품만 보시려면
          <button
            className="btn btn--primary blue cursor-pointer text-red-700 p-2"
            onClick={() => (window.location.href = "/shop")}
          >
            shop
          </button>
          menu 를 이용 하세요
          <br />
        </p>
        <div>
          🖱️ 주문을 하시려면{" "}
          <button onClick={login} className={`btn btn--primary  `}>
            login
          </button>
          하셔야 합니다.
        </div>
        <div>
          <span className={`inline-block`}>
            문자와 트위터만 확인 합니다.
            <FaSms color="red" className={`inline-block mr-2  `} size={50} />
          </span>
        </div>
      </section>
  )
}
