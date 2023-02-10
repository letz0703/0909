import { useState, useEffect, useRef } from "react"
import FormWrapper from "./form-wrapper"
export default function UserForm() {
  let UserForm = "user-form.jsx"

  return (
    <FormWrapper title="주문자 정보" className="">
      <label>이름</label>
      <input type="text" autoFocus required className="w-5/6" />
      <label>핸드폰 번호</label>
      <input type="text" autoFocus required min={7} className="w-5/6" />
      <label>개인 통관번호</label>
      <input type="text" autoFocus required className="w-5/6" />
    </FormWrapper>
  )
}
