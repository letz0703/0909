import ProductCard from "./ProductCard"
import useProducts from "../hooks/use-products"
import { Row } from "react-bootstrap"
import { useContext } from "react"
import { JapitemContext } from "../App"
import { uuidv4 } from "@firebase/util"

export default function Products({ japitems }) {
  const { handleJapitemAdd, handleJapitemDelete } = useContext(JapitemContext)
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts()

  console.log(products)
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {/* <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"> */}
      <Row md={2} xs={1} lg={3} xl={5} className="gap-3 p-3">
        {products &&
          products.map((product) => (
            // <ProductCard key={product.id} product={product} />
            <ProductCard key={product.id} {...product} />
          ))}
      </Row>
      {/* </ul> */}
    </>
  )
}
