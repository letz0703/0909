import { useState, useEffect } from "react"
import { useMultiStepForm } from "../../hooks/multi-step-form"
import UserForm from "./user-form"
import AddressForm from "./address-form"
import SpecialSelected from "./special-selected"
import CustomInfo from "./custom_info"

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
import PromiseForm from "./promise-form"
import OwnerForm from "./owner-form"
import ClearanceForm from "./clearance-form"

export default function Jap09Form({ icUser }) {
  const { user } = useAuthContext()
  const INITIAL_DATA = {
    uid: user?.uid || crypto.randomUUID(),
    jName: "",
    jCell: "",
    jCsNo: "",
    jProduct: "곤약젤리+동전파스",
    // jDeliveryTo: "",
    jEtc: "",
  }
  const [data, setData] = useState(INITIAL_DATA)

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <PromiseForm />,
      <OwnerForm />,
      <ClearanceForm />,
      // <SpecialSelected {...data} updateFields={updateFields} />,
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
    console.log("data:", data)
    create_rdb_jorders(data)
    // create_rdb_customers(data)
    /** save data to RDB 2023.02.13/월 */
    alert("동의 하셨습니다.")
    window.location.replace("/")
  }

  const create_rdb_jorders = (data) => {
    // if (user || icUser) {
    set(ref(database, `jorders/${data.uid}`), {
      name: data.jName,
      // user?.displayName,
      uid: data.uid,
      // uid: data.uid,
      cell: data.jCell,
      customNo: data.jCsNo,
      jProduct: "곤약젤리+동전파스",
      // jProduct: data.jProduct,
      orderDate: Date(),
      // deliveryTo: data.jDeliveryTo,
      delivery: "not yet",
    })
      // .then(() => alert("data saved"))
      .catch((error) => console.log(error))
    // }
  }

  const create_rdb_customers = (e) => {
    // const data = getAllInputs()
    user &&
      set(ref(database, `customers/${data?.uid}`), {
        jname: data.jName,
        uid: user.uid,
        jcell: data.jCell,
        jCsNo: data.jCsNo,
        jDeliveryTo: data.jDeliveryTo,
      })
        .then(() => alert("data saved"))
        .catch((error) => console.log(error))
  }

  return (
    <div className="jap09-formjsx ">
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
            <button className="btn btn--primary mini" onClick={back}>
              back
            </button>
          )}
          <button className="btn btn--primary mini">
            {!isLastStep ? "next" : "동의 및 신청"}
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
