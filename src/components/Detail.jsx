import { Offcanvas } from "react-bootstrap"
import { useState, useEffect, useRef, useContext } from "react"
import { useDetail } from "../context/DetailContext"
export default function Detail() {
  const { isOpen_Detail, open_Detail, close_Detail } = useDetail()

  return (
    <>
      <Offcanvas
        show={isOpen_Detail}
        onHide={close_Detail}
        placement="top"
        className="Detail__Offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>ITEM DETAIL</Offcanvas.Title>
        </Offcanvas.Header>
      </Offcanvas>
      <style>{`
        .Detail__Offcanvas{
          width: 100vw;
        }
      `}</style>
    </>
  )
}
