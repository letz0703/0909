//import React, { useEffect } from "react"
//import useScript from "../../hooks/useScript"
//// import useScript from "../../hooks/useScript"
//import styles from "./ham.module.css"
//// import Hamscript from "./hamscript"

//export default function Ham() {
//  useScript("./js/hamscript.js")

//  return (
//    <div className={styles.examples}>
//      <button
//        className={styles.buttonOne}
//        aria-controls="primary-navigation"
//        aria-expanded="false"
//        // aria-pressed="false"
//      >
//        <svg
//          fill="var(--button-color)"
//          className="hamburger"
//          viewBox="0 0 100 100"
//          width="250"
//        >
//          <rect
//            className={` ${styles.top} ${styles.line}`}
//            // className="top line"
//            width="75"
//            height="10"
//            x="12"
//            y="20"
//            rx="5" //half of x round
//          ></rect>
//          <rect
//            className={` ${styles.middle} ${styles.line}`}
//            // className="middle line"
//            width="75"
//            height="10"
//            x="12"
//            y="45"
//            rx="5"
//          ></rect>
//          <rect
//            className={` ${styles.bottom} ${styles.line}`}
//            // className="bottom line"
//            width="75"
//            height="10"
//            x="12"
//            y="70"
//            rx="5"
//          ></rect>
//        </svg>
//      </button>
//      <button
//        className="buttonTwo"
//        aria-controls="primary-navigation"
//        aria-expanded="true"
//        // aria-pressed="false"
//      >
//        <svg
//          fill="var(--button-color)"
//          className="hamburger"
//          viewBox="0 0 100 100"
//          width="250"
//        >
//          <line></line>
//        </svg>
//      </button>
//      <button className="button-three"></button>
//    </div>
//  )
//}

///**
// *
// *     <svg
//          stroke="currentColor"
//          fill="currentColor"
//          strokeWidth="0"
//          viewBox="0 0 512 512"
//          height="1.5em"
//          width="1.5em"
//          xmlns="http://www.w3.org/2000/svg"
//        >
//          <path d="M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z"></path>
//        </svg>
// */
