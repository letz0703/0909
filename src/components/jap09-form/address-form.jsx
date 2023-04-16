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
        <label htmlFor="jProduct">해외주문 품목</label>
        <input
          id="jProduct"
          type="text"
          value={jProduct}
          onChange={(e) => updateFields({ jProducts: e.target.value })}
        />
        {/* <label>수령지 주소</label>
        <input
          type="text" autoFocus
          value={jDeliveryTo}
          onChange={(e) => updateFields({ jDeliveryTo: e.target.value })}
        /> */}
        {/*<label htmlFor="requset">요청사항(곤약 선택시)</label>
        <input
          id="requset"
          type="text"
          value={jEtc}
          onChange={(e) => updateFields({ jEtc: e.target.value })}
        />*/}
      </FormWrapper>
      <div className="address-form__info pb-3">
        <div>고객님께는 주문하신 상품과 공동구매 상품을 미리 보내 드리므로</div>
        <div>일주일 후 통관 되는, 공동구매 품목은 저희 소유입니다</div>
        <div>해당 품목만 150불 이하, 1회 한정 수입 합니다</div>
      </div>
      <style>{`
        .address-form__info {
          padding-top: 1rem;
        }
      `}</style>
    </div>
  )
}
