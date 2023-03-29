import { useState } from "react"
import FormWrapper from "./form-wrapper"
export default function PromiseForm({ updateFields }) {
  return (
    <div className="bg-blue-100 p-2 rounded-b-xl">
      {/* <FormWrapper title="해외 주문 금지"></FormWrapper> */}
      <h2 className="text-xl mb-3 bg-red-200 text-black p-2 font-bold">
        필수 조항: 입금후 10일간 해외 주문 금지
      </h2>
      <p>개인 무관세 한도(150불)에 맞추어 해외주문 합니다</p>
      <p>타사이트에서 또 다른 해외주문을 할 경우</p>
      <p>관세가 발생할 수 있습니다</p>
      <p>
        이는 명백한 고객님의 귀책 사유로써 해당 관세는
        <br /> 고객님께서 전액 납부 하셔야 합니다
      </p>
      <p className="mb-3">이상을 제외 한 경우 절대 추가 비용은 없습니다</p>
      <p className="mb-3">
        수입계획이 있으시면 문자 안내시 입금을 하지마십시오
      </p>
      <p>입금안내 문자 후 미입금 24시간 후 본 신청서는 삭제 합니다</p>
    </div>
  )
}
