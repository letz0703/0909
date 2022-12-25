import {useNavigate} from "react-router-dom"
import FormatCurrency from "../util/formatCurrency"

export default function ProductCard({
  product,
  product: {id, image, title, category, price}
}) {
  const navigate = useNavigate()
  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, {state: {product}})
      }}
      className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105"
    >
      <img src={image} alt={title} className="w-full" />
      <div className="mt-2 px-2 text-lg flex flex-col justify-center items-center">
        <h3 className="font-semibold line-clamp-1">{title}</h3>
        <p>{FormatCurrency(price)}</p>
      </div>
      <p className="my-4 mx-4 flex justify-end text-sm text-gray-600">
        category: {category}
      </p>
    </li>
  )
}
