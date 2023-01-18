// import { useAuthContext } from "../../context/AuthContext"
import { v4 as uuidv4 } from "uuid"
import { getOrders, database, db } from "../api/firebase"
import { useEffect, useState } from "react"
import {
  getDocs,
  addDoc,
  collection,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore"
import FormatCurrency from "../util/formatCurrency"

export default function NewProduct() {
  const [code, setCode] = useState("")
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [imgUrl, setImgUrl] = useState("")
  const [stock, setStock] = useState(0)
  // const { user, uid } = useAuthContext()
  const japitemRef = collection(db, "japitems") //customNo, userId
  const [japitems, setJapitems] = useState([])

  const createJapitem = async () => {
    await addDoc(japitemRef, {
      code: code,
      name: name,
      price: price,
      description: description,
      imgUrl: imgUrl,
      stock: stock,
    })
  }

  const handleUpdateStock = async (id, stock) => {
    const japitemsDoc = doc(db, "japitems", id)
    const stock_step = 5
    const newFields = { stock: Number(stock) + stock_step }
    await updateDoc(japitemsDoc, newFields)
  }

  const handleJapitemDelete = async (id) => {
    const japitemDoc = doc(db, "japitems", id)
    await deleteDoc(japitemDoc)
  }

  useEffect(() => {
    const getJapitems = async () => {
      const data = await getDocs(japitemRef)
      setJapitems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getJapitems()
  }, [])

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        className="flex flex-col justify-center text-center"
        style={{ maxWidth: "300px" }}
      >
        <input
          type="text"
          placeholder="아이템코드"
          onChange={(e) => setCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="item name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="imgUrl"
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <input
          type="number"
          placeholder="stock"
          step={5}
          onChange={(e) => setStock(e.target.value)}
        />
      </form>
      <button className="btn btn--primary" onClick={createJapitem}>
        아이템등록
      </button>
      {japitems.map((japitem) => (
        <div key={uuidv4()}>
          <div className="new-product__list place-content-center text-center">
            <span>code: {japitem.code}</span>
            <span>
              {japitem.name}
              <button
                onClick={() => {
                  handleJapitemDelete(japitem.id)
                }}
                className="btn btn--danger mini"
              >
                del
              </button>
            </span>
            <span className="text-orange-500 font-bold">
              {FormatCurrency(japitem.price)}
            </span>

            <span>
              <img src={japitem.imgUrl} className="new-product__list-image" />
            </span>
          </div>
          <div className="new-product__list place-content-center">
            <span>&times;</span>
            <span>
              {japitem.stock}개{" "}
              <button
                onClick={() => {
                  handleUpdateStock(japitem.id, japitem.stock)
                }}
                className="btn mini btn--primary"
              >
                +
              </button>
              <span className="text-xs text-gray-500">in stock</span>
            </span>
            <span className="font-semibold">TOTAL: </span>
            <span>{FormatCurrency(japitem.stock * japitem.price)}</span>
          </div>

          <style>{`
          .new-product__list{
            display: grid;
            grid-template-columns: repeat(4, 12rem);
            border-bottom: 1px dashed black;
            padding: 2rem;
          }
          .new-product__list-image{
            width: 10rem;
          }

          `}</style>
        </div>
      ))}
    </div>
  )
}
