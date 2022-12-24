import ProductCard from "./ProductCard"
import useProducts from "../hooks/use-products"

export default function Products() {
  const {
    productsQuery: {isLoading, error, data: products}
  } = useProducts()

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
        {products &&
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  )
}
