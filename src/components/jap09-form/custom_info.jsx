import { useState } from "react"
import FormWrapper from "./form-wrapper"
export default function CustomInfo() {
  let SpecialSelected = "special-selected.jsx"

  return (
    <div className="special-selected">
      <FormWrapper title="통관 상세 안내"></FormWrapper>
      <h2 className="text-xl mb-3 bg-red-200 text-black p-3 font-bold">
        필수 조항: 일주일간 해외주문 금지
      </h2>
      <p>개인 무관세 한도(150불)이하로 공동구매 하기 때문에</p>
      <p>고객님이 다른 해외주문을 하고 통관시점이 겹칠 경우</p>
      <p>
        불필요한 관세(10만원 전후)가 발생 합니다. <br />
        이는 명백한 고객님의 귀책 사유로 고객님께서 부담하셔야 합니다.
      </p>
      <br />
      <h2 className="text-xl mb-3 p-3 bg-red-200 text-black font-bold">
        통관 물품은 저희 소유 입니다
      </h2>
      <div className="font-bold underline">
        고객님께는 선배송 해드리기 때문에 <br />
        일주일 전후 통관되는 공동구매 상품의 소유권은 당사에 있습니다
      </div>
      <br />
      <h2 className="text-xl text-red-600 font-bold">통관 안내 문자안내</h2>
      <p>통관시점에 관세사에서 통관안내 문자가 고객님께 발송 됩니다</p>
      <div>정상적인 안내 메시지이고, 무시 하셔도 됩니다</div>
      <div className="bg-red-200 p-2">
        해외수입금지 조항을 지킨신 경우, 절대 추가 경비를 요구하지 않습니다.
        스팸에 주의 하세요.
      </div>
      <div className="bg-blue-200 p-2">이에 대한 고객문의는 받지 않습니다</div>
      <div className="bg-blue-200 p-2">기타 문의는 twitter로 트윗해주세요</div>

      <style>{`
        .special-selected {
        }
      `}</style>
    </div>
  )
}
