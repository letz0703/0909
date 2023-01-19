import { Col, Row } from "react-bootstrap"
import storeItems from "../data/items.json"
import { useJapitems } from "../hooks/use-japitems"
import StoreItem from "./Store__Item"

export default function Store() {
  const [japitems, setJapitems] = useJapitems()
  return (
    <>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={4} xl={5} className="g-3">
        {japitems.map((item) => (
          // <Col key={item}>{JSON.stringify(item.products)}</Col>
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
