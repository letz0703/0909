import { useState, useEffect, useRef } from "react"
import FormWrapper from "./form-wrapper"
export default function AddressForm() {
  let UserForm = "user-form.jsx"

  return (
    <div>
      <FormWrapper title="배송 정보">
        <label>상품명</label>
        <input type="text" autoFocus required value="캬베진 300정 만원" />
        <label>수령지 주소</label>
        <input type="text" required />
        <label>기타 요청사항</label>
        <input type="textarea" />
      </FormWrapper>
      <div className="address-form__info">
        <div>깡통시장 유통중인 제품을 바로 보내 드립니다</div>
        <div>통관 후 받으셔도 됩니다(일주일에서 10일 후)</div>
        <div>원하실 경우 기타 요청사항에 남겨 주세요</div>
      </div>
      <style>{`
        .address-form__info {
          padding-top: 1rem;
        }
      `}</style>
    </div>
  )
}
