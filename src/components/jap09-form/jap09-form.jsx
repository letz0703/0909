import { useState, useEffect } from "react"
import { useMultiStepForm } from "../../hooks/multi-step-form"
import AddressForm from "./address-form"
import CustomInfo from "./custom_info"
import SpecialSelected from "./special-selected"
import UserForm from "./user-form"

export default function Jap09Form() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <UserForm />,
      <AddressForm />,
      <SpecialSelected />,
      <CustomInfo />,
    ])

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
            {!isLastStep ? "next" : "동의 및 주문"}
          </button>
        </div>

        {/* <div>통관된 물품의 소유권은 저희에게 있습니다</div> */}

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
