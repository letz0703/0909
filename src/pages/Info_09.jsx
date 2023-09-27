import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import { FaSms } from "react-icons/fa"
export function Info09() {
  const { user, uid, login, logout } = useAuthContext()
  return (
    <section
      key="info09"
      style={{ width: "maxContent" }}
      className={`flex flex-col justify-center`}
    >
      <h3 className={`text-[3rem]  pb-[0.9rem]`}>wizbox</h3>
      <p className={`text-[1.1rem] text-[#c10002]`}>
        {/*<span className={`text-[3rem]`}>.</span>*/}
        <br />
        🛍 <br />
        japan
      </p>
      {/*<div className="relative">
        <div className=" absolute right-[50%] w-[40px] translate-x-[130px] -translate-y-2">
          <img src="/stroke_red.png" alt="stroke" />
        </div>
      </div>*/}
      <div className={`pt-1 text-xl pb-1`}>010.9876.1815</div>
      <div className={`text-xl pt-[1em] font-semibold text-gray-500 mb-1`}>
        OPEN : 7PM ~ 7AM
        <div>
          <span className={`inline-block`}>문자만 확인 합니다.</span>
          <FaSms
            color="#c10002"
            className={`inline-block mr-2 w-[2em] `}
            size={50}
          />
        </div>
      </div>
      <div className={`text-slate-700 `}>
        본 사이트는 저희 단골고객과 <br />
        가게 방문 고객분들께만 <br />
        알려드리고 있습니다.
      </div>

      <div>
        {/*🛍️ 주문 하시려면*/}
        <button onClick={login} className={`btn btn--primary  `}>
          login
        </button>
        {/*하세요!*/}
      </div>
    </section>
  )
}
