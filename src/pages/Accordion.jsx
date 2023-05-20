import React from "react"
import styles from "./Accordion.module.css"

export function Accordion() {
  return (
    <div
      className={` ${styles.gong9} bg-[#f2f2f2] w-full h-full  flex  justify-center items-center`}
    >
      <div className="list">
        {/* begin item */}
        <div
          className={`${styles.question} bg-[#e9e9e9] p-5 border border-[#c6c6c655] round-md w-[280px]}`}
          group
          is-active
        >
          <div className={`${styles.one} flex items-center`}>
            <div
              className={`${styles.q} w-full
								group-[.is-active]:font-bold
							`}
            >
              what is your name?
            </div>
            <div
              className={`${styles.q2}
						text-xl rotate-90
						group-[.is-active]:rotate-[270deg]
						`}
            >
              ➕
            </div>
          </div>
          <div
            className={`${styles.dkf} overflow-hidden max-h-0 group-[.is-active]:max-h-[100px] `}
          >
            Mani is Here
          </div>
        </div>
        {/* end item */}
      </div>
    </div>
  )
}
