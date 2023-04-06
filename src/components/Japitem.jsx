import {useState, useEffect, useContext} from "react"
import {JapitemContext, SearchContext} from "../App"
import FormatCurrency from "../util/formatCurrency"
import {Row} from "react-bootstrap"
import ProductCard from "./ProductCard"

export default function Japitem(props) {
  const {id, name, price, category, description, options} = props
  const {handleJapitemDelete, japitems} = useContext(JapitemContext)
  const {search} = useContext(SearchContext)

  return (
    <Row md={2} xs={1} lg={3} xl={5} className="gap-3 p-3">
      {japitems
        .filter(item => {
          return search.toLowerCase() === ""
            ? item
            : item.name.toLowerCase().includes(search)
        })
        .map(row => {
          return <ProductCard key={crypto.randomUUID()} {...row} />
        })}
    </Row>
  )
}
