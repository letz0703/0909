import { useState, useEffect } from "react"
import { useMultiStepForm } from "../../hooks/multi-step-form"
import AddressForm from "./address-form"
import SpecialSelected from "./special-selected"
import UserForm from "./user-form"

export default function Jap09Form() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([<UserForm />, <AddressForm />, <SpecialSelected />])

  return (
    <div className="jap09FormJSX">
      <form>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <div className="buttons">
              <button onClick={back} className="btn btn--primary mini">
                back
              </button>
            </div>
          )}
          <button
            type="button"
            className="btn btn--primary mini"
            onClick={next}
          >
            {!isLastStep ? "next" : "Finished"}
          </button>
        </div>
        <div>
          고객님의 개인통관 번호로 이달의 아이템이 함께 주문-통관 됩니다
        </div>
        <div>대신 고객님은 해외운임과 택배비가 무료 입니다</div>
        <div>제품은 깡통시장 유통중인 제품을 먼저 받으시거나</div>
        <div>통관 후 받으셔도 됩니다(일주일에서 10일 후)</div>
        <div>통관된 물품의 소유권은 저희에게 있습니다</div>

        <style>{`
        .jap09FormJSX {
          position: relative;
          background: white;
          border: 1px solid black;
          padding: 2rem;
          margin: 1rem;
          border-radius: .5rem;
          font-family: inherit;
          max-width: max-content;
        }
      `}</style>
      </form>
    </div>
  )
}
