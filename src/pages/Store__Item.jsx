import React from "react"
import { Card } from "react-bootstrap"
import { v4 as uuidv4 } from "uuid"
//import styles from './StoreItem.module.css'
import FormatCurrency from "../util/formatCurrency"

export default function StoreItem(props) {
  const { code, description, homeUrl, id, imgUrl, name, price } = props
  return (
    <Card>
      <Card.Img
        variant={top}
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="flex justify-between items-baseline mb-4">
          <span>{name}</span>
          <span>{FormatCurrency(price)}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  )
}
