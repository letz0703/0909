import { useState } from "react"
import FormWrapper from "./form-wrapper"
export default function SpecialSelected() {
  let SpecialSelected = "special-selected.jsx"

  return (
    <div className="special-selected">
      <FormWrapper title="추가 주문 안내"></FormWrapper>
      <div>공동구매 상품은 정해진 수량만 주문 할 수 있습니다</div>
      <br />
      <div>
        추가로 주문을 원하시면 store에서 깡통시장 구매대행을 이용해 주세요
      </div>
      <div>해공동구매를 신청 시 깡통시장 상품의 기본 배송료는 없습니다.</div>
      <style>{`
        .special-selected {
        }
      `}</style>
    </div>
  )
}
