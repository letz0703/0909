import { useState, useEffect, useRef } from "react"
// import { useAuthContext } from "../../context/AuthContext"
import FormWrapper from "./form-wrapper"
export default function AddressForm({
  jProduct,
  jDeliveryTo,
  jEtc,
  updateFields,
}) {
  return (
    <div id="new-japOrder-form" className="bg-blue-100 p-4 rounded-b-xl">
      <FormWrapper title="공동구매 아이템">
        <label htmlFor="jProduct">해외주문 품목</label>
        <input
          type="text"
          id="jProduct"
          value={jProduct}
          onChange={(e) => updateFields({ jProducts: e.target.value })}
        />
      </FormWrapper>
      <div className="address-form__info pb-3">
        <div>
          고객님께는 주문하신 상품과 곤약 1봉지를 바로 보냅니다.(선배송)
        </div>
        <div>일주일 후 통관되는 수입품은 다음 고객님들 몫입니다</div>
        <div>고객님께는 선배송 해드렸으므로 고객님의 소유권은 없습니다</div>
        <div>공지한 품목만 150불( 무관세 한도 ) 이하로 1회만 수입 합니다 </div>
      </div>
      <style>{`
        .address-form__info {
          padding-top: 1rem;
        }
      `}</style>
    </div>
  )
}
