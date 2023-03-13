import { useState } from "react"
import FormWrapper from "./form-wrapper"
export default function PromiseForm({ updateFields }) {
  return (
    <div className="bg-blue-100 p-2 rounded-b-xl">
      {/* <FormWrapper title="해외 주문 금지"></FormWrapper> */}
      <h2 className="text-xl mb-3 bg-red-200 text-black p-2 font-bold">
        필수 조항: 입금후 10일간 해외 주문 금지
      </h2>
      <p>개인 무관세 한도(150불)에 딱 맞추어 공동구매 합니다</p>
      <p>타사이트에서 해외주문을 하고, 같은날 통관이 되면</p>
      <p>불필요한 관세가 발생 합니다</p>
      <p>
        이는 명백한 고객님의 귀책 사유로써 해당 관세는
        <br /> 고객님께서 전액 납부 하셔야 합니다
      </p>
      <p className="mb-3">이상을 제외 한 경우 절대 추가 비용은 없습니다</p>
    </div>
  )
}
