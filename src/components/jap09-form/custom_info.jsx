import { useState } from "react"
import FormWrapper from "./form-wrapper"
export default function CustomInfo() {
  let SpecialSelected = "special-selected.jsx"

  return (
    <div className="bg-blue-100 p-4 rounded-b-xl">
      {/* <FormWrapper title="통관 상세 안내"></FormWrapper> */}
      <h2 className="text-xl mb-3 bg-red-200 text-black p-3 font-bold">
        다음 주문 안내
      </h2>
      <p>본 상품은 오프라인 방문 고객분들을 위한 서비스 상품입니다.</p>
      <p>신청 → 개인통관번호 확인 → 주문 가능시점에 개별 통보 드립니다.</p>
      <p>다음 주문은 최단 전주문이 통관 완료된 이후 가능합니다</p>
      <p>본 동의서 및 개인통관 번호은 통관 1개월 후 삭제 합니다</p>
      <p>재주문 시에는 다시 동의, 신청 하셔야 합니다</p>
      {/* <div className="bg-blue-200 p-2">기타 문의는 twitter로 트윗해주세요</div> */}

      <style>{`
        .special-selected {
        }
      `}</style>
    </div>
  )
}
