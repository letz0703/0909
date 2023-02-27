import { useState } from "react"
import FormWrapper from "./form-wrapper"
export default function CustomInfo() {
  let SpecialSelected = "special-selected.jsx"

  return (
    <div className="special-selected">
      <FormWrapper title="통관 상세 안내"></FormWrapper>
      <h2 className="text-xl text-red-600 font-bold">
        필수 조항: 10일간 타사이트를 통해 수입하셔서는 안됩니다
      </h2>
      <p>개인 무관세 한도(150불)이하로 공동구매 하기 때문에</p>
      <p>고객님이 타사이트에서 주문 하고 통관시점이 겹칠 경우</p>
      <p>
        불필요한 관세(10만원 전후)가 발생 합니다, 이는 고객님의 귀책 사유로
        고객님께서 부담하셔야 합니다.
      </p>
      <br />
      <h2 className="text-xl text-red-600 font-bold">
        통관된 물품은 저희 소유 입니다
      </h2>
      <div className="font-bold underline">
        고객님께는 선배송 해드리기 때문에 일주일 전후로 통관되는는공동구매
        상품들은 저희 소유 입니다
      </div>
      <br />
      <h2 className="text-xl text-red-600 font-bold">통관 안내 문자안내</h2>
      <p>통관시점에 관관사사서 안내 문자가 고객님께 발송 됩니다</p>
      <div>정상적인 안내 메시지이고, 무시 하셔도 됩니다</div>
      <div className="bg-red-200">
        10일간 해외수입금지 조항을 지킨신 경우, 절대 추가 경비를 요구하지
        않습니다. 스팸에 주의 하세요.
      </div>
      <div className="bg-blue-200">이에 대한 고객문의는 받지 않습니다</div>

      <style>{`
        .special-selected {
        }
      `}</style>
    </div>
  )
}
