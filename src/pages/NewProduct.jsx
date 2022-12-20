import {useState, useEffect, useRef} from "react"
//import styles from './NewProduct.module.css'
export default function NewProduct() {
  const [product, setProduct] = useState({})

  const handleChange = e => {
    const {name, value} = e.target
    change().then(setProduct(() => ({...product, [name]: value})))
  }

  const handleSubmit = e => {}

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
      </form>
    </section>
  )
}
