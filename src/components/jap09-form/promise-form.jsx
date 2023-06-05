import { useState } from "react"
import FormWrapper from "./form-wrapper"
export default function PromiseForm({ updateFields }) {
  return (
    <div className="bg-blue-100 p-2 rounded-b-xl">
      {/* <FormWrapper title="해외 주문 금지"></FormWrapper> */}
      <h2 className="text-xl mb-3 bg-red-200 text-black p-2 font-bold">
        통관 안내문자: 일주일 전후로 고객님께 안내문자가 갑니다.
      </h2>
      <p>개인 무관세 한도(150불)에 이하로 주문하므로</p>
      <p>절대 추가 비용이 발생하지 않고 요구하지 습니다</p>
      <p>예외적으로</p>
      <p>
        고객님이 조건(10일수입금지)을 어기고 다른 곳 해외 주문을 하고,
        <br /> 해당 주문과 본 저희쪽 주문의 통관시점이 겹치게 되면 <br />
        합산 관세가 발생할 수 있습니다
      </p>
      <p>
        이는 명백한 고객님의 귀책 사유로써 해당 관세는 고객님께서 전액 납부
        하셔야 합니다.
      </p>
      <p className="mb-3">
        주문 수령 후 바로 문자드리니, 수입계획이 있으시면
        <br />
        문자 안내시 입금을 하지마십시오
      </p>
      <p>
        입금 안내 문자 발송 후 미입금시, 24시간 경과 후 본 신청서는 삭제 합니다
      </p>
    </div>
  )
}
