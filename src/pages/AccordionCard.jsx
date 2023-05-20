import React, { useState } from "react"
import styles from "./Accordion.module.css"

export function AccordionCard({ data }) {
  const [item, setItem] = useState(data)
  const [isActive, setIsActive] = useState(data.active ? true : false)

  function handleToggle() {
    setIsActive((prev) => !prev)
  }

  return (
    <>
      <div className={`${styles.accordion_list}`}>
        {/* begin item */}
        <div
          className={`${
            styles.question
          } bg-[#e9e9e9] p-3 border border-[#c6c6c655] round-md w-3/4}
          duration-100
          mb-3
          group

          ${isActive ? "is-active bg-white" : ""}

          `}
        >
          <div className={`${styles.one} flex items-center`}>
            <div
              className={`${styles.q} w-full
            //group-[.is-active]:font-bold
            duration-1000
            mr-5
            `}
            >
              {data.q}
            </div>
            <div
              className={`
            text-xl rotate-90
            group-[.is-active]:rotate-[270deg]  cursor-pointer
            duration-400
            `}
              onClick={handleToggle}
            >
              >
            </div>
          </div>
          <div
            className={`overflow-hidden max-h-0 group-[.is-active]:max-h-[100px]`}
          >
            {data.a}
          </div>
          {/* end item */}
        </div>
      </div>
    </>
  )
}
