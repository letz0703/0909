import { useState } from "react"
import FormWrapper from "./form-wrapper"
export default function SpecialSelected() {
  let SpecialSelected = "special-selected.jsx"

  return (
    <div className="special-selected">
      <FormWrapper title="주문 안내"></FormWrapper>
      <div>한개만 주문 가능합니다</div>
      <br />
      <div>추가 주문은 깡통시장 구매 대행(store)를 이용해 주세요</div>
      <style>{`
        .special-selected {
        }
      `}</style>
    </div>
  )
}
