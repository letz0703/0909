import {useState, useEffect, useRef} from "react"
import {uploadImage} from "../api/uploader"
import Button from "../components/ui/button"
import useProducts from "../hooks/use-products"

export default function NewProduct() {
  const [product, setProduct] = useState({})
  const [file, setFile] = useState()
  const [isUploading, setIsUploading] = useState(false)
  const [success, setSuccess] = useState()

  const {addProduct} = useProducts()

  // const addProduct = useMutation(
  //   ({product, url}) => addNewProduct(product, url),
  //   {
  //     onSuccess: () => queryClient.invalidateQueries(["products"])
  //   }
  // )

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
    setIsUploading(true)
    uploadImage(file)
      .then(url =>
        addProduct.mutate(
          {product, url},
          {
            onSuccess: () => {
              setSuccess("제품이 추가 됐어요")
              setTimeout(() => {
                setSuccess(null)
              }, 4000)
            }
          }
        )
      )
      .finally(() => setIsUploading(false))
  }

  return (
    <section>
      <h2 className="text-2xl my-6 flex flex-col items-center">
        새로운 제품 등록
      </h2>
      {success && <p>⍻{success}</p>}
      {file && <img src={URL.createObjectURL(file)} alt="local file" />}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-2">
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
          name="options"
          value={product.options ?? ""}
          placeholder="옵션들(콤마로,구분)"
          required
          onChange={handleChange}
        />
        <Button
          text={isUploading ? "uploading..." : "제품등록 하기"}
          disabled={isUploading}
        />
      </form>
    </section>
  )
}
