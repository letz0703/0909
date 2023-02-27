import { useState, useEffect, useRef } from "react"
import FormWrapper from "./form-wrapper"
import { Link } from "react-router-dom"

export default function UserForm({ jName, jCell, jCsNo, updateFields }) {
  let UserForm = "user-form.jsx"

  return (
    <div>
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
          <div>
            고객님의 개인통관 번호는
            <span
              onClick={() => {
                window.location.href =
                  "https://unipass.customs.go.kr/csp/persIndex.do"
              }}
              className="cursor-pointer underline"
            >
              관세청 홈페이지
            </span>
            에서 즉시 발급 됩니다
          </div>
          <div>미화 150불 한도내에서 공동구매 상품만 1회 수입 합니다.</div>
        </div>
        <style>{`
        .user-form__info {
          padding-top: 1rem;
        }
      `}</style>
      </div>
    </div>
  )
}
