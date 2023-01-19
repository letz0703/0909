import React from "react"
import { Card } from "react-bootstrap"
import { v4 as uuidv4 } from "uuid"
import { useShoppingCart } from "../context/ShoppingCartContext"
//import styles from './StoreItem.module.css'
import FormatCurrency from "../util/formatCurrency"

export default function StoreItem(props) {
  const { code, description, homeUrl, id, imgUrl, name, price } = props
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreateCartQuantity,
    removeFromCart,
  } = useShoppingCart()

  const quantity = getItemQuantity(id)
  return (
    <Card className="h-100">
      <Card.Img
        variant={top}
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="flex justify-between items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button
              className="btn btn--primary w-100"
              onClick={() => increaseCartQuantity(id)}
            >
              + Add To Cart
            </button>
          ) : (
            <div className="flex items-center justify-center flex-col gap-2">
              <div className="flex gap-3">
                <button
                  className="btn btn--primary mini"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </button>
                <div>
                  <span className="fs-3">{quantity}</span> 개
                </div>
                <button
                  className="btn btn--primary mini"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </button>
                <button
                  className="btn btn--danger mini"
                  onClick={() => removeFromCart(id)}
                >
                  취소
                </button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}
