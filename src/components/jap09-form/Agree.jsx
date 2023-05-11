import React from "react"
import { useEffect } from "react"

export function Agree({ deleteRequest, handleDeleteRequest }) {
  return (
    <>
      <span className="">통관 후 삭제 요청 체크</span>
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
