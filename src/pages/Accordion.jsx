import React, { useState } from "react"
import styles from "./Accordion.module.css"
import { AccordionCard } from "./AccordionCard"

export function Accordion() {
  const [list, setList] = useState([
    {
      q: "6월 공동구매: 곤약젤리",
      a: "주문 제품외 배송비, 곤약젤리 2개 무료(맛 랜덤)",
      active: true,
    },
    { q: "Your Name is mani?", a: "Yes I am" },
  ])
  return (
    <div
      className={` ${styles.Accordion} bg-[#f2f2f2] w-full h-screen  flex flex-col  justify-center items-center`}
    >
      {list.map((row, key) => (
        <AccordionCard key={key} data={row} />
      ))}
    </div>
  )
}
