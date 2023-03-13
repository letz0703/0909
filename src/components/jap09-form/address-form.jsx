import { useState, useEffect, useRef } from "react"
// import { useAuthContext } from "../../context/AuthContext"
import FormWrapper from "./form-wrapper"
export default function AddressForm({
  jProduct,
  jDeliveryTo,
  jEtc,
  updateFields,
}) {
  // let UserForm = "user-form.jsx"
  // const { user } = useAuthContext()

  return (
    <div className="bg-blue-100 p-4 rounded-b-xl">
      <FormWrapper title="공동구매 아이템">
        <label>해외주문 품목</label>
        <input
          type="text"
          value={jProduct}
          onChange={(e) => updateFields({ jProducts: e.target.value })}
        />
        {/* <label>수령지 주소</label>
        <input
          type="text"
          autoFocus
          value={jDeliveryTo}
          onChange={(e) => updateFields({ jDeliveryTo: e.target.value })}
        /> */}
        <label>기타 요청사항</label>
        <input
          type="text"
          value={jEtc}
          onChange={(e) => updateFields({ jEtc: e.target.value })}
        />
      </FormWrapper>
      <div className="address-form__info pb-3">
        <div>
          고객님께서 주문한 아이템들은 부산 깡통시장 유통중 제품으로 바로 보내
          드립니다
        </div>
        <div>공동구매 품목은 저희 소유입니다</div>
        <div>해당 품목만 150불 이하, 1회 한정 수입 합니다</div>
        {/* <div>통관 후 받으셔도 됩니다(일주일에서 10일 후)</div> */}
        {/* <div>원하실 경우 기타 요청사항에 남겨 주세요</div> */}
      </div>
      <style>{`
        .address-form__info {
          padding-top: 1rem;
        }
      `}</style>
    </div>
  )
}
