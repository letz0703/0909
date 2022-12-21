import {useState, useEffect, useRef} from "react"
import {addNewProduct} from "../api/firebase"
import {uploadImage} from "../api/uploader"
import Button from "../components/ui/button"
//import styles from './NewProduct.module.css'
export default function NewProduct() {
  const [product, setProduct] = useState({})
  const [file, setFile] = useState()

  const handleChange = e => {
    const {name, value, files} = e.target
    if (name === "file") {
      setFile(files && files[0])
      return
    }
    setProduct(() => ({...product, [name]: value}))
  }

  const handleSubmit = e => {
    e.preventDefault()
    uploadImage(file).then(url => addNewProduct(product, url))
  }

  return (
    <section>
      {file && <img src={URL.createObjectURL(file)} alt="local file" />}
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ""}
          placeholder="제품명"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          value={product.price ?? ""}
          placeholder="가격"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ""}
          placeholder="카테고리"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ""}
          placeholder="상세 설명"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="option"
          value={product.option ?? ""}
          placeholder="옵션들(콤마로,구분)"
          required
          onChange={handleChange}
        />
        <Button text={"제품 등록"} />
      </form>
    </section>
  )
}
