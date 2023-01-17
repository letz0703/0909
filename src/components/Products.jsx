// import { useAuthContext } from "../../context/AuthContext"
import { v4 as uuidv4 } from "uuid"
import { getOrders, database, db } from "../api/firebase"
import { useContext, useEffect, useState } from "react"
import {
  getDocs,
  addDoc,
  collection,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore"
import FormatCurrency from "../util/formatCurrency"
import { SearchContext } from "../App"
import { useNavigate } from "react-router-dom"

export default function Products() {
  const { search } = useContext(SearchContext)
  // const [code, setCode] = useState("")
  // const [name, setName] = useState("")
  // const [price, setPrice] = useState(0)
  // const [imgUrl, setImgUrl] = useState("")
  // const [stock, setStock] = useState(0)
  // // const { user, uid } = useAuthContext()
  const japitemRef = collection(db, "japitems") //customNo, userId
  const [japitems, setJapitems] = useState([])
  const navigate = useNavigate()

  // const createJapitem = async () => {
  //   await addDoc(japitemRef, {
  //     code: code,
  //     name: name,
  //     price: price,
  //     imgUrl: imgUrl,
  //     stock: stock,
  //   })
  // }

  // const handleUpdateStock = async (id, stock) => {
  //   const japitemsDoc = doc(db, "japitems", id)
  //   const stock_step = 5
  //   const newFields = { stock: Number(stock) + stock_step }
  //   await updateDoc(japitemsDoc, newFields)
  // }

  // const handleJapitemDelete = async (id) => {
  //   const japitemDoc = doc(db, "japitems", id)
  //   await deleteDoc(japitemDoc)
  // }

  useEffect(() => {
    const getJapitems = async () => {
      const data = await getDocs(japitemRef)
      setJapitems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getJapitems()
  }, [])

  return (
    <div className="shop-home grid gap-2">
      {japitems
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.name.toLowerCase().includes(search)
        })
        .map((japitem) => (
          <div key={uuidv4()}>
            <div
              className="new-product__list place-content-center text-center card"
              onClick={() => {
                navigate(`/japitems/${japitem.id}`, { state: { japitem } })
              }}
            >
              {/* <span>code: {japitem.code}</span> */}
              <span>
                {japitem.name}
                {/* <button
                onClick={() => {
                  handleJapitemDelete(japitem.id)
                }}
                className="btn btn--danger mini"
              >
                del
              </button> */}
              </span>
              <span className="text-orange-500 font-bold">
                {FormatCurrency(japitem.price)}
              </span>

              <span>
                <img src={japitem.imgUrl} className="new-product__list-image" />
              </span>
            </div>
            {/* <div className="new-product__list place-content-center">
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
          </div> */}

            <style>{`
          .shop-home{
            display: grid;
            grid-template-columns: repeat(4, 12rem);
            border-bottom: 1px dashed black;
            padding: 2rem;
            cursor: pointer;
          }
          .new-product__list-image{
            width: 10rem;
            cursor: pointer;
          }

          `}</style>
          </div>
        ))}
    </div>
  )
}
