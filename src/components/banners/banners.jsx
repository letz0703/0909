import {useState, useEffect, useRef} from "react"
//import styles from './banners.module.css'
export default function Banners() {
  return (
    <section className="h-96 relative">
      <div className="w-full h-full bg-contain bg-banner opacity-90"></div>
      <div className="absolute bg-transparent w-full h-full text-gray-50 drop-shadow-2xl top-32">
        <h2 className="text-6xl border p-2">Order For You!</h2>
        <p className="text-2xl text-gray-50 mt-2 font-semibold">
          일본현지 주문, 당일발송, 개인 사서함: WIZBOX
        </p>
      </div>
    </section>
  )
}
