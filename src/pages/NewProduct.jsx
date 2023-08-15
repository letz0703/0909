// import { useAuthContext } from "../../context/AuthContext"
import { v4 as uuidv4 } from "uuid"
import { getOrders, database, db } from "../api/firebase"
import { useEffect, useState } from "react"
import FormatCurrency from "../util/formatCurrency"
import { uploadImage } from "../api/uploader"
import { useJapitems } from "../hooks/use-japitems"
import { getDatabase, ref, set, get, remove, child } from "firebase/database"
import { useLocalStorage } from "../hooks/useLocalStorage"
import IcORders from "../components/IcORders"
import CSVtoJSONConverter from "../util/converter_json"

export default function NewProduct() {
  const [newProduct, setNewProduct] = useState([])
  const [addedJapitem, setAddedJapitem] = useState([])

  function updateFields(fields) {
    setNewProduct((prev) => {
      return { ...prev, ...fields }
    })
  }

  const createJapitem = async (data) => {
    const id = crypto.randomUUID()
    set(ref(database, `japitems/${id}`), {
      id: id,
      code: data.code || "",
      name: data.name,
      description: data.description,
      price: data.price,
      imgUrl: data.imgUrl,
      homeUrl: data.homeUrl || "",
      qty: Number(data.qty) || 0,
    })
      .then(() => {
        alert("data saved")
      })
      .catch((error) => console.log(error))
  }

  const handleJapitemDelete = async (id) => {
    remove(ref(database, `japitems/${id}`))
      .then(() => console.log("data deleted"))
      .catch((error) => alert("error", error))
  }

  function onSubmit(e) {
    e.preventDefault()
    createJapitem(newProduct)
    setAddedJapitem(newProduct)
  }

  return (
    <div className={`pt-[6rem]`}>
      <div>
        <label htmlFor="searchOrder">Oder Search</label>
        <input type="text" id="searchOrder" />
      </div>
      <table className="newProduct__table">
        <thead>
          <tr>
            <th scope="row">item code</th>
            <th scope="row">name</th>
            <th scope="row">price</th>
            <th scope="row">description</th>
            <th scope="row">imgUrl</th>
            <th scope="row">homeUrl</th>
            <th scope="row">qty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                id="code"
                type="text"
                placeholder="아이템코드"
                onChange={(e) => updateFields({ code: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="item name"
                onChange={(e) => updateFields({ name: e.target.value })}
              />
            </td>
            <td>
              <input
                type="number"
                placeholder="price"
                onChange={(e) => updateFields({ price: e.target.value })}
              />
            </td>
            <td>
              <input
                type="textarea"
                placeholder="description"
                onChange={(e) => updateFields({ description: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="imgUrl"
                onChange={(e) => updateFields({ imgUrl: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="homeUrl"
                onChange={(e) => updateFields({ homeUrl: e.target.value })}
              />
            </td>
            <td>
              <input
                type="number"
                placeholder="product qty"
                step={5}
                onChange={(e) => updateFields({ qty: Number(e.target.value) })}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <CSVtoJSONConverter />
      <button className="btn btn--primary">아이템등록</button>

      <div className="new-product__Main  w-full text-center flex flex-col justify-center items-center">
        <div className="new-product__list place-content-center text-center w-full">
          <span>code: {addedJapitem.code}</span>
          <span>
            {addedJapitem.name}
            <button
              onClick={() => {
                handleJapitemDelete(addedJapitem.id)
              }}
              className="btn btn--danger mini"
            >
              del
            </button>
          </span>
          <span className="text-orange-500 font-bold">
            {FormatCurrency(addedJapitem.price)}
          </span>
          <img
            src={addedJapitem?.imgUrl || null}
            className="new-product__list-image mx-auto"
            style={{ width: "96px" }}
          />
          <span>&times;</span>
          <span>
            {addedJapitem.qty}개{" "}
            <button
              onClick={() => {
                handleUpdateStock(addedJapitem.id, addedJapitem.qty)
              }}
              className="btn mini btn--primary"
            >
              +
            </button>
            <span className="text-xs text-gray-500">in qty</span>
          </span>
        </div>
        <span className="font-semibold">
          TOTAL: {FormatCurrency(addedJapitem.qty * addedJapitem.price)}
        </span>

        <h1>전체 주문</h1>
        <IcORders />

        <style>{`
        .newProduct__table{
          // border-collapse: collapse;
          // text-align: left;
          // line-height: 1.5;
          // margin : 20px 10px;
        }

          .new-product__Main input {
            background-color: #c10002;
            padding: 1.2em;
            color: #e1e1e1;
          }
          .new-product__Main {
            display: grid;
          }
          .new-product__form-group{
            display: grid;
            gap: 0.3rem;
          }
          .new-product__form-group--full-width{
            grid-column: 1/ -1;
          }
          .new-product__form {
            display: grid;
            gap: 1.25rem;
          }
          @media (min-width: 1024px) {
            .new-product__form {
              grid-template-columns: repeat(6, 1fr);
            }
          }
          .new-product__list{
            display: grid;
            grid-template-columns: repeat(6, 12rem);
            border-bottom: 1px dashed black;
            padding: 2rem;
          }
          .new-product__list-image{
            width: 10rem;
          }
          `}</style>
      </div>
    </div>
  )
}
