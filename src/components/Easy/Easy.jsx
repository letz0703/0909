import React, { useState } from "react"
import styles from "./Easy.module.css"

export function Easy() {
  const [isOpen, setIsOpen] = useState(true)

  const toggleEasy = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.demoContainer} `}>
        <button
          className={`${styles.closeButton} ${isOpen ? styles.open : ""}`}
          onClick={toggleEasy}
        >
          CLOSE
        </button>
        {isOpen ? (
          <div className={`${styles.inner} ${styles.isOpen}`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            tenetur eligendi ratione laborum nesciunt, alias aliquam dolorum quo
            nihil magnam nemo tempore optio, mollitia reprehenderit ut cumque.
            Facilis, animi maxime!
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}
