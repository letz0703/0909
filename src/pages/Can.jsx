import {useState, useEffect, useRef} from "react"
import {useNavigate} from "react-router-dom"
//import styles from './Can.module.css'
export default function Can() {
  const [barcode, setBarcode] = useState("")
  const navigate = useNavigate()

  const handleChange = e => {
    setBarcode(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    setBarcode("")
    navigate(`/Can/${barcode}`)
  }

  return (
    <h1>
      Can
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="barcode : "
          value={barcode}
          onChange={handleChange}
        />
      </form>
    </h1>
  )
}
