import { useNavigate } from "react-router-dom"
import FormatCurrency from "../util/formatCurrency"

// type StoreItemProps = {
//   id: number,
//   title: string,
//   price: number,
//   image: string,
//   category: string
// }

export default function ProductCard(props) {
  // }):StoreItemProps {
  const { id, image, title, category, price, name } = props
  const product = props
  const navigate = useNavigate()
  return (
    <li
      key={id}
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } })
      }}
      className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105"
    >
      <img src={image} alt={title} className="w-full" />
      <div className="mt-2 px-2 text-lg flex flex-col justify-center items-center">
        <h3 className="font-semibold line-clamp-1">{name}</h3>
        <p>{FormatCurrency(price)}</p>
      </div>
      <p className="my-4 mx-4 flex justify-end text-sm text-gray-600">
        category: {category}
      </p>
    </li>
  )
}
