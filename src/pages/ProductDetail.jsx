import {useState, useEffect, useRef} from "react"
import {useLocation} from "react-router-dom"
import Button__SHOP from "../components/ui/button"
//import styles from './ProductDetail.module.css'
export default function ProductDetail() {
  const {
    state: {
      product: {id, image, title, description, category, price, options}
    }
  } = useLocation()

  const [selected, setSelected] = useState(options && options[0])

  const handleSelect = e => {
    const {value} = e.target
    setSelected(value)
  }

  const handleClick = e => {}

  return (
    <section>
      <p>{category}</p>
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{description}</p>
        <p>options:</p>
        <select onChange={handleSelect} value={selected}>
          {options &&
            options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
        </select>
        <Button__SHOP text="장바구니 추가" onClick={handleClick} />
      </div>
    </section>
  )
}
