import { useState, useEffect } from "react"
import { useMultiStepForm } from "../../hooks/multi-step-form"
import AddressForm from "./address-form"
import CustomInfo from "./custom_info"
import SpecialSelected from "./special-selected"
import UserForm from "./user-form"

const INITIAL_DATA = {
  jName: "",
  jCell: "",
  jCsNo: "",
  jProduct: "",
  jDeleiveryTo: "",
}

function updateFields(fields) {
  setData((prev) => {
    return { ...prev, ...fields }
  })
}

export default function Jap09Form() {
  const [data, setData] = useState(INITIAL_DATA)
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <UserForm {...data} updateFiled={updateFields} />,
      <AddressForm {...data} updateFiled={updateFields} />,
      <SpecialSelected {...data} updateFiled={updateFields} />,
      <CustomInfo {...data} updateFiled={updateFields} />,
    ])

  function onSubmit(e) {
    e.preventDefault()
    next()
  }

  return (
    <div className="jap09FormJSX">
      <form onSubmit={onSubmit}>
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
            <button onClick={back} className="btn btn--primary mini">
              back
            </button>
          )}
          <button className="btn btn--primary mini">
            {!isLastStep ? "next" : "동의 및 주문"}
          </button>
        </div>
      </form>
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
    </div>
  )
}
