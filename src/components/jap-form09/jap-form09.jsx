import { useState, useEffect } from "react"
import { useMultiStepForm } from "../../hooks/multi-step-form"

export default function JapForm09() {
  let JapForm09 = "jap-form09.jsx"
  const { steps, currentStepIndex, step, isFirstStep } = useMultiStepForm([
    <div>One</div>,
    <div>Two</div>,
  ])

  return (
    <>
      <form action="" className="japForm09">
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div className="text-2xl">일본 공동구매 동의서</div>
        <div className="buttons flex gap-0.5g flex-end justify-end">
          {!isFirstStep && (
            <div className="buttons">
              <button>back</button>
            </div>
          )}
          <button className="btn btn--primary mini">next</button>
        </div>
        <div>
          고객님의 개인통관 번호로 이달의 아이템이 함께 주문-통관 됩니다
        </div>
        <div>대신 고객님은 해외운임과 택배비가 무료 입니다</div>
        <div>제품은 깡통시장 유통중인 제품을 먼저 받으시거나</div>
        <div>통관 후 받으셔도 됩니다(일주일에서 10일 후)</div>
        <div>통관된 물품의 소유권은 저희에게 있습니다</div>
        <hr />
        <div className="p-3">이달의 아이템</div>

        <label htmlFor="customNo">개인통관번호</label>
        <input type="text" id="customNo" name="customNo" className="p_input" />
      </form>
      <style>{`
        .japForm09 {
          position: relative;
          background: white;
          border: 1px solid black;
          padding: 2rem;
          margin: 1 rem;
          border-radius: .5rem;
          font-family: arial;
        }
      `}</style>
    </>
  )
}
