import { useState, useEffect, useRef } from "react"
import FormWrapper from "./form-wrapper"
export default function UserForm() {
  let UserForm = "user-form.jsx"

  return (
    <div className="user-form">
      <FormWrapper title="주문자 정보">
        <label>이름</label>
        <input type="text" autoFocus required className="w-5/6" />
        <label>핸드폰 번호</label>
        <input type="text" autoFocus required min={7} className="w-5/6" />
        <label>개인 통관번호</label>
        <input type="text" autoFocus required className="w-5/6" />
      </FormWrapper>
      <div className="user-form__info">
        <div>고객님의 개인통관 번호를 사용해서 공동구매 합니다</div>
        <div>미화 150불 한도내에서 공동구매 등록된 상품만 합니다.</div>
        <div>
          대신 고객님께는 해외운임과{" "}
          <span className="text-blue-600">기본택배비가 무료</span>입니다
        </div>
      </div>
      <style>{`
        .user-form__info {
          padding-top: 1rem;
        }
      `}</style>
    </div>
  )
}
