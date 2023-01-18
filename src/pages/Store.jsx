import { Col, Row } from "react-bootstrap"
import storeItems from "../data/items.json"
import StoreItem from "./Store__Item"

export default function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          // <Col key={item}>{JSON.stringify(item.products)}</Col>
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
