import React from "react"
//import styles from './Agree.module.css'

export function Agree() {
  return (
    <>
      <div>모두 확인 하였습니다</div>
      <label>
        <input type="checkbox" defaultChecked={isComplete} />
      </label>
    </>
  )
}
