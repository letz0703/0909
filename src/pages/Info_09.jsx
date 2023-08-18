import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import { FaSms } from "react-icons/fa"
export function Info09() {
  const { user, uid, login, logout } = useAuthContext()
  return (
    <>
      //prettier-ignore
      <section key="info09" style={{ width: "maxContent" }}>
        <h3 className={`text-[3rem]  pb-[0.9rem]`}>wizbox</h3>
        <p className={`text-[1.1rem] text-[#c10002]`}>
          <span className={`text-[3rem]`}>.</span>
          <br />
          shop <br />
          by <br />
          i.canmart
        </p>
        <div className={`pt-1 text-xl pb-1`}>010.9876.1815</div>
        {/*<div className={`flex justify-center align-center`}>*/}
        {/*<pre className={`w-auto text-[1.4em] py-2 `}>다음날 받는 해외주문</pre>*/}
        {/*</div>*/}
        <div className="text"></div>

        <div>
          <span className={`inline-block`}>
            문자
            {/*<span
              onClick={() => window.open("http://twitter.com/wizbox051")}
              className={`cursor-pointer underline`}
            >
              트윗
            </span>*/}
            만 확인 합니다.
            <FaSms
              color="#c10002"
              className={`inline-block mr-2  `}
              size={50}
            />
          </span>
        </div>
        <div className={`text-slate-700 pt-3`}>
          본 사이트는 저희 단골고객과 <br />
          오프라인 가게 방문 고객분들
          <br />
          께만 알려드리고 있습니다.
          <br />
          가격정보 사이트 입니다.
        </div>
        <div className={`text-xl pt-[3em] font-semibold text-gray-500`}>
          {/*밤 7시 ~ 새벽 7시까지만 Open 합니다.*/}
        </div>
        <div className={`text-xl pt-[1em] font-semibold text-gray-500`}>
          {/*오프라인 깡통시장 가격 보다 1% 더 저렴합니다*/}
        </div>
        <div>
          {/*🛍️ 주문 하시려면*/}
          <button onClick={login} className={`btn btn--primary  `}>
            login
          </button>
          {/*하세요!*/}
        </div>
      </section>
    </>
  )
}
