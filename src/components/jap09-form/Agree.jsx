import React from "react"
import { useEffect } from "react"

export function Agree({ deleteRequest, handleDeleteRequest }) {
  return (
    <>
      <span className="">통관 후 통관번호 삭제 요청</span>
      <label className="w-auto">
        <input
          type="checkbox"
          defaultChecked={deleteRequest}
          onClick={handleDeleteRequest}
        />
      </label>
    </>
  )
}
