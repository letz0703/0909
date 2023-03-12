import { useState, useEffect } from "react"
import { useMultiStepForm } from "../../hooks/multi-step-form"
import AddressForm from "./address-form"
import CustomInfo from "./custom_info"
import SpecialSelected from "./special-selected"
import UserForm from "./user-form"

/**import for RDB */
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  remove,
  child, //
} from "firebase/database"
import { database } from "../../api/firebase"
import { useAuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Jap09Form({ icUser }) {
  const { user } = useAuthContext()
  const INITIAL_DATA = {
    uid: user?.uid || crypto.randomUUID(),
    jName: "",
    jCell: "",
    jCsNo: "",
    jProduct: "곤약 복숭아 1(컵형) + 곤약젤리 랜던2(짜먹는)",
    jDeliveryTo: "",
    jEtc: "",
  }
  const [data, setData] = useState(INITIAL_DATA)

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <SpecialSelected {...data} updateFields={updateFields} />,
      <CustomInfo {...data} updateFields={updateFields} />,
    ])

  const navigate = useNavigate()
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }

  function onSubmit(e) {
    e.preventDefault()
    if (!isLastStep) return next()
    // console.log(data) create_rdb_jorders(data)
    /** save data to RDB 2023.02.13/월 */
    alert("주문이 완료 되었습니다.")
    window.location.replace("/jap")
  }
  const create_rdb_jorders = (data) => {
    // if (user || icUser) {
    set(ref(database, `customers/jorders/${data.uid}`), {
      name: data.jName,
      // user?.displayName,
      uid: user?.uid,
      // uid: data.uid,
      cell: Number(data.jCell),
      customNo: data.jCsNo,
      jProduct: data.jProduct,
      orderDate: Date(),
      delivery: "not yet",
    })
      // .then(() => alert("data saved"))
      .catch((error) => console.log(error))
    // }
  }

  return (
    <div className="jap09FormJSX">
      <form onSubmit={onSubmit} style={{ maxWidth: "max-content" }}>
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
