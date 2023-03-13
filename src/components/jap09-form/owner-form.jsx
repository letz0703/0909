import { useState } from "react"
import FormWrapper from "./form-wrapper"
export default function OwnerForm({ updateFields }) {
  return (
    <div className="bg-blue-100 p-2 rounded-b-xl">
      {/* <FormWrapper title="해외 주문 금지"></FormWrapper> */}
      <h2 className="text-xl mb-3 bg-red-200 text-black p-2 font-bold">
        통관 물품의 소유권
      </h2>
      <p>고객님께는 깡통시장 물건을 선배송 해드리므로</p>
      <p>통관된 물건의 소유권은 저희에게 있습니다</p>
    </div>
  )
}
