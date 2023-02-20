import { useState, useEffect, useRef } from "react"
import FormWrapper from "./form-wrapper"
export default function UserForm({ jName, jCell, jCsNo, updateFields }) {
  let UserForm = "user-form.jsx"

  return (
    <div className="user-form">
      <FormWrapper title="신청서">
        <label>이름</label>
        <input
          type="text"
          autoFocus
          required
          className="w-5/6"
          value={jName}
          onChange={(e) => updateFields({ jName: e.target.value })}
        />
        <label>핸드폰 번호</label>
        <input
          type="text"
          required
          min={7}
          className="w-5/6"
          value={jCell}
          onChange={(e) => updateFields({ jCell: e.target.value })}
        />
        <label>개인 통관번호</label>
        <input
          type="text"
          required
          className="w-5/6"
          value={jCsNo}
          onChange={(e) => updateFields({ jCsNo: e.target.value })}
        />
      </FormWrapper>
      <div className="user-form__info">
        <div>고객님의 개인통관 번호를 사용해서 공동구매 합니다</div>
        <div>미화 150불 한도내에서 공동구매 상품만 수입 합니다.</div>
        <div>대신 고객님께는 특별가 1만원에 캬베진을 드립니다(다음날 수령)</div>
        <div>
          해외운임과
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
