import { useState } from "react"
import FormWrapper from "./form-wrapper"
export default function ClearanceForm({ updateFields }) {
  return (
    <div className="bg-blue-100 p-2 rounded-b-xl">
      {/* <FormWrapper title="해외 주문 금지"></FormWrapper> */}
      <h2 className="text-xl mb-3 bg-red-200 text-black p-2 font-bold">
        통관 안내
      </h2>
      {/*<p>일주일 전후로 통관이 진행됩니다</p>*/}
      <p>통관 시 세관에서 고객님께 안내 문자를 보냅니다</p>
      {/*<p>고객님의 주문건은 선발송 해드렸</p>*/}
      <p>필수조항 이행시 추가 비용이 절대 없으므로</p>
      <p>문자는 무시하시면 됩니다</p>
      <p className="mb-3">이에 대해 문의는 받지 않습니다</p>
    </div>
  )
}
