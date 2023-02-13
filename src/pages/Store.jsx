import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import { SearchContext } from "../App"
// import storeItems from "../data/items.json"
import { useJapitems } from "../hooks/use-japitems"
import StoreItem from "./Store__Item"

export default function Store() {
  const { search } = useContext(SearchContext)
  const [japitems, setJapitems] = useJapitems()
  return (
    <>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={4} xl={5} className="g-3">
        {/* <div xs={1} md={2} lg={4} xl={5} className="g-3"> */}
        {japitems
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search)
          })
          .map((japitem) => (
            // <Col key={japitem}>{JSON.stringify(japitem.products)}</Col>
            <Col key={japitem.id}>
              <StoreItem {...japitem} />
            </Col>
          ))}
      </Row>
    </>
  )
}
