import {useState} from "react"
import {useLocation} from "react-router-dom"
import Button from "../components/ui/button"
import useCart from "../hooks/use-cart"
import FormatCurrency from "../util/formatCurrency"

export default function ProductDetail() {
  const {addOrUpdateItem} = useCart()
  const {
    state: {
      product: {id, image, title, description, category, price, options}
    }
  } = useLocation()

  const [success, setSuccess] = useState()
  const [selected, setSelected] = useState(options && options[0])

  const handleSelect = e => {
    setSelected(e.target.value)
  }

  const handleClick = e => {
    const product = {id, image, title, price, option: selected, quantity: 1}
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess("장바구니에 넣으셨어요")
        setTimeout(() => setSuccess(null), 3000)
      }
    })
  }

  return (
    <>
      <p className="mx-12 mt-4 text-gray-700">category: {category}</p>
      <section className="flex flex-col md:flex-row p-4">
        <img src={image} alt={title} className="w-full px-4 basis-7/12" />
        <div
          className="w-full basis-5/12 flex flex-col p-4"
          style={{maxWidth: "700px"}}
        >
          <h2 className="text-3xl font-bold py-2 ">{title}</h2>
          <p className="text-2xl font-bold py-2 border-b border-gray-400">
            {FormatCurrency(price)}
          </p>
          <p className="py-4 text-lg">{description}</p>
          <div className="flex items-center">
            <label htmlFor="select" className="text-brand font-semibold">
              options:
            </label>
            <select
              id="select"
              onChange={handleSelect}
              value={selected}
              className="w-full m-4 p-2 flex-1 border-2 border-dashed border-brand outline-none"
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          {success && <p className="my-2">{success}</p>}
          <Button text="장바구니 추가" onClick={handleClick} />
        </div>
      </section>
    </>
  )
}
