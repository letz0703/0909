import { useState } from "react"
import { useLocation } from "react-router-dom"
import Button from "../components/ui/button"
import { useShoppingCart } from "../context/ShoppingCartContext"
import useCart from "../hooks/use-cart"
import FormatCurrency from "../util/formatCurrency"

export default function ProductDetail() {
  const { openCart } = useShoppingCart()
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()

  const { addOrUpdateItem } = useCart()
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation()

  const [success, setSuccess] = useState()
  const [selected, setSelected] = useState(options && options[0])

  const handleSelect = (e) => {
    setSelected(e.target.value)
  }

  const handleClick = (e) => {
    const product = {
      // id,
      image,
      title,
      price,
      option: selected,
      quantity: itemQty,
    }
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess("장바구니에 넣으셨어요")
        setTimeout(() => setSuccess(null), 3000)
      },
    })
  }
  const itemQty = getItemQuantity(id)
  return (
    <>
      <p className="mx-12 mt-4 text-gray-700">category: {category}</p>
      <section className="flex flex-col md:flex-row p-4">
        <img src={image} alt={title} className="w-full px-4 basis-7/12" />
        <div
          className="w-full basis-5/12 flex flex-col p-4"
          style={{ maxWidth: "700px" }}
        >
          <h1 className="text-3xl font-bold py-2">{title}</h1>
          <p className="text-xl font-bold pb-3 border-b border-gray-400">
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
          {itemQty === 0 ? (
            <Button
              text="장바구니 추가"
              onClick={() => increaseCartQuantity(id)}
            />
          ) : (
            <div
              className="d-flex flex-col items-center justify-center"
              style={{ gap: ".5rem" }}
            >
              <div className="d-flex" style={{ gap: ".5rem" }}>
                <Button
                  text="-"
                  onClick={() => {
                    decreaseCartQuantity(id)
                    console.log(itemQty)
                  }}
                />
                {/* <div className="text-xl font-bold m-2">{quantity}</div> */}
                <div className="text-xl font-bold m-2">{itemQty}</div>
                <Button text="+" onClick={() => increaseCartQuantity(id)} />
                <span className="text-5xl" onClick={() => removeFromCart(id)}>
                  🗑️
                </span>
                <button onClick={openCart} className="text-white">
                  장바구니보기
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
