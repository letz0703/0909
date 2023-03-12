import { useState } from "react"
import FormWrapper from "./form-wrapper"
export default function SpecialSelected({ updateFields }) {
  let SpecialSelected = "special-selected.jsx"

  return (
    <div className="bg-blue-100 p-4 rounded-b-xl">
      <FormWrapper title="추가 주문 안내"></FormWrapper>
      <div>공동구매 상품은 정해진 수량만 주문 할 수 있습니다</div>
      <br />
      <div class="extra-form__info">
        <div>
          추가로 주문을 원하시면 store 메뉴에서 깡통시장 구매대행을 이용해
          주세요
        </div>
        <div>공동구매 신청시 깡통시장 상품의 기본 배송료는 무료 입니다.</div>
      </div>
      <style>{`
        .extra-from__info {
          padding-top: 1rem;
        }
      `}</style>
    </div>
  )
}
