import { useState } from "react"
import FormWrapper from "./form-wrapper"
export default function CustomInfo() {
  let SpecialSelected = "special-selected.jsx"

  return (
    <div className="special-selected">
      <FormWrapper title="통관 상세 안내"></FormWrapper>
      <h3 className="text-2xl">일주일에서 10일 후 통관 됩니다</h3>
      <div>제품을 미리 발송 합니다. 이후</div>
      <div className="font-bold underline">
        통관된 공동 구매 상품의 소유권은 저희에게 있습니다
      </div>
      <div>미화 150불, 개인통관 한도에 맞춰서 공동구매를 진행 하기 때문에,</div>
      <div className="text-red-500 font-semibold">
        고객님께서는 보름간 타사이트에서 해외주문을 절대 하셔서는 안됩니다
      </div>

      <div>다른 사이트에서의 해외 주문 상품과 통관 시점이 겹칠 경우</div>
      <div>통관한도 초과로 관세가 발생할 수 있습니다. 이는</div>
      <div>
        명백한 고객님의 실수이므로 이로 인한 관세는 고객님께서 부담하셔야 하며
        저희는 책임이 없습니다
      </div>
      <div className="text-red-500">
        그외 경우에는 절대 관세가 발생 할 수 없으므로, 추가적 경비를 일절
        요구하지 않습니다
      </div>
      <div>
        통관시점에서 통관 관련 안내문자를 받게 되며 함께 통관되는 제품은 확인
        하실수 있습니다.
      </div>
      <div>정상적인 안내 메시지이고, 무시 하셔도 됩니다</div>
      <div className="bg-red-200">
        재확인 드립니다. 10일간 해외수입금지 조항을 지킨신 경우, 절대 추가
        경비를 요구하지 않습니다.
      </div>
      <div className="bg-blue-200">이에 대한 고객문의는 받지 않습니다</div>

      <style>{`
        .special-selected {
        }
      `}</style>
    </div>
  )
}
