import { Offcanvas } from "bootstrap"
import { useState, useEffect, useRef } from "react"
import { useDetail } from "../context/DetailContext"
export default function Detail({ isOpenDetail }) {
  const { isOpen_Detail, openDetail, closeDetail } = useDetail()
  return (
    <Offcanvas show={isOpenDetail}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>ITEM DETAIL</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  )
}
