import React from "react"
import { useEffect } from "react"
//import styles from './Agree.module.css'

export function Agree({ deleteRequest, handleDeleteRequest }) {
  return (
    <>
      <div>통관 후 삭제 요청 체크</div>
      <label>
        <input
          type="checkbox"
          defaultChecked={deleteRequest}
          onClick={handleDeleteRequest}
        />
      </label>
    </>
  )
}
