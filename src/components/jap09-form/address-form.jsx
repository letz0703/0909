import { useState, useEffect, useRef } from "react"
import FormWrapper from "./form-wrapper"
export default function AddressForm() {
  let UserForm = "user-form.jsx"

  return (
    <FormWrapper>
      <label>수령지 주소</label>
      <input type="text" autoFocus required />
      <label>기타 요청사항</label>
      <input type="textarea" />
    </FormWrapper>
  )
}
