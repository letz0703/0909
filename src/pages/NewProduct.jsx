// import { useAuthContext } from "../../context/AuthContext"
import { v4 as uuidv4 } from "uuid"
import "./NewProduct.css"
import { getOrders, database, db } from "../api/firebase"
import { useEffect, useRef, useState } from "react"
import FormatCurrency from "../util/formatCurrency"
import { uploadImage } from "../api/uploader"
import { useJapitems } from "../hooks/use-japitems"
import {
  getDatabase,
  ref,
  set,
  get,
  remove,
  child,
  update,
} from "firebase/database"
import { useLocalStorage } from "../hooks/useLocalStorage"
import IcORders from "../components/IcORders"
import CSVtoJSONConverter from "../util/converter_json"

export default function NewProduct() {
  const [newProduct, setNewProduct] = useState({})
  const refName = useRef()

  const handleJapitemDelete = async (id) => {
    remove(ref(database, `japitems/${id}`))
      .then(() => console.log("data deleted"))
      .catch((error) => alert("error", error))
  }
  function updateFields(fields) {
    setNewProduct((prev) => {
      return { ...prev, ...fields }
    })
  }
  const [japitems, setJapitems] = useJapitems()

  const createJapitem = (data) => {
    update(ref(database, `japitems/${data.id}`), {
      //id: data.id,
      name: data.name,
      //price: data.price,
      //qty: Number(data.qty) || 0,
      //description: data.description,
      //imgUrl: data.imgUrl,
      //homeUrl: data.homeUrl || "",
    })
      .then(() => {
        alert("data saved")
      })
      .catch((error) => console.log(error))
  }

  function handleSubmit(e) {
    e.preventDefault()
    //if (e.target.value == "") return
    setNewProduct({ id: crypto.randomUUID(), name: refName.current.value })
    createJapitem(newProduct)
    //createJapitem(newProduct)
    //setAddedJapitem(newProduct)
  }
  //function handleSubmit() {
  //console.log(newProduct)
  //}
  return (
    <div className={`pt-[6rem]`}>
      <CSVtoJSONConverter />

      <div className="new-product__Main  w-full text-center flex flex-col justify-center items-center">
        <h1>전체 주문</h1>
        <IcORders />
      </div>
      <section>
        <h3>Add New Item</h3>
        <form id="new-product-form" onSubmit={handleSubmit}>
          <label htmlFor="name">new item</label>
          <input type="text" id="name" ref={refName} />
          <button className={`btn btn--primary`}>add</button>
        </form>
      </section>
    </div>
  )
}
