// import { useAuthContext } from "../../context/AuthContext"
import { v4 as uuidv4 } from "uuid"
import { getOrders, database, db } from "../api/firebase"
import { useEffect, useState } from "react"
import { getDocs, addDoc, collection } from "firebase/firestore"
import FormatCurrency from "../util/formatCurrency"

export default function Customs() {
  const [code, setCode] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [imgUrl, setImgUrl] = useState("")
  // const { user, uid } = useAuthContext()
  const japitemRef = collection(db, "japitem") //customNo, userId
  const [japitems, setJapitems] = useState([])

  const createJapitem = async () => {
    await addDoc(japitemRef, {
      code: code,
      name: name,
      price: price,
      imgUrl: imgUrl,
    })
  }
  useEffect(() => {
    const getJapitems = async () => {
      const data = await getDocs(japitemRef)
      setJapitems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getJapitems()
  }, [])

  return (
    <div>
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
        placeholder="imgUrl"
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <button className="btn btn--primary" onClick={createJapitem}>
        아이템등록
      </button>
      {japitems.map((japitem) => (
        <div
          key={uuidv4()}
          className="new-product__list place-content-center text-center"
        >
          <span>code: {japitem.code}</span>
          <span>{japitem.name}</span>
          <span>{FormatCurrency(japitem.price)}</span>
          <span>
            <img src={japitem.imgUrl} className="new-product__list-image" />
          </span>

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
