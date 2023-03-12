import { useState } from "react"
import FormWrapper from "./form-wrapper"
export default function SpecialSelected({ updateFields }) {
  let SpecialSelected = "special-selected.jsx"

  return (
    <div className="bg-blue-100 p-4 rounded-b-xl">
      <FormWrapper title="추가 주문 안내">
        <div className="bg-red-300 p-2">
          공동구매 상품은 정해진 수량만 주문 할 수 있습니다
        </div>
        <div class="extra-form__info">
          <div>오프라인 상품 추가 가능하며</div>
          <div>공동구매 신청시 기본 배송료는 무료 입니다.</div>
        </div>
      </FormWrapper>
      <br />
      <style>{`
        .extra-from__info {
          padding-top: 1rem;
        }
      `}</style>
    </div>
  )
}
