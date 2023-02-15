// import { useAuthContext } from "../../context/AuthContext"
import { v4 as uuidv4 } from "uuid"
import { getOrders, database, db } from "../api/firebase"
import { useEffect, useState } from "react"
// import {
//   getDocs,
//   addDoc,
//   collection,
//   doc,
//   updateDoc,
//   deleteDoc,
// } from "firebase/firestore"
import FormatCurrency from "../util/formatCurrency"
import { uploadImage } from "../api/uploader"
import { useJapitems } from "../hooks/use-japitems"
import { getDatabase, ref, set, get, remove, child } from 'firebase/database'
import {useLocalStorage} from "../hooks/use-local-storage"
const INITIAL_PRODUCT = {
  id:'',
  code: '',
  name: '',
  description: '',
  price: '',
  imgUrl: '',
  homeUrl: '',
  qty: 0
}

export default function NewProduct() {
  const [products, setProducts] = useState({});
  const [product, setProduct] = useState(INITIAL_PRODUCT);
  const [japitems, setJapitems]= useJapitems()
  const [newProduct, setNewProduct] = useState(INITIAL_PRODUCT);
  const [successMsg, setSuccessMsg] = useState("success!!!");
  const [qty, setQty] = useState(0);
  const [addedJapitem, setAddedJapitem] = useState(INITIAL_PRODUCT);


  function updateFields(fields){
    setNewProduct(prev => {
      return {...prev, ...fields}
    })
  }

  const createJapitem = async (data) => {
    const id = crypto.randomUUID()
    set(ref(database,`japitems/${id}` ),{
      id:id,
      code: data.code ||'',
      name: data.name,
      description: data.description,
      price: data.price,
      imgUrl: data.imgUrl,
      homeUrl: data.homeUrl || '',
      qty: Number(data.qty) ||0
    }).then(() => {
    alert('data saved')
    }
    )
    .catch(error => console.log(error))
  }

  // const handleUpdateStock = async (id, qty) => {
  //   const japitemsDoc = doc(db, "japitems", id)
  //   const stock_step = 5
  //   const newFields = { qty: Number(qty) + stock_step }
  //   await updateDoc(japitemsDoc, newFields).then(() => {
  //     setSuccessMsg("업데이트 완료!")
  //     setTimeout(() => {
  //       setSuccessMsg("null")
  //     }, 4000)
  //   })
  // }

  const handleJapitemDelete = async (id) => {
    remove(ref(database,`japitems/${id}`))
    .then(() => console.log("data deleted"))
    .catch((error) => alert("error", error))
  }

  // const handleJapitemDelete = async (id) => {
  //   const japitemDoc = doc(db, "japitems", id)
  //   await deleteDoc(japitemDoc)
  // }

  // useEffect(() => {
  //   const getJapitems = async () => {
  //     const data = await getDocs(japitemRef)
  //     setJapitems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  //   }
  //   getJapitems()
  // }, [])

  function onSubmit(e){
    e.preventDefault()
    createJapitem(newProduct)
    setAddedJapitem(newProduct)
  }

  return (
    <div className="new-product__Main  w-full text-center flex flex-col justify-center items-center">
      <form
        className="new-product__form flex flex-col justify-center text-center gap-2 items-center pt-2"
        style={{ margin: "0 auto", maxWidth: "300px" }}
        onSubmit={onSubmit}
      >
        {/* <div className="new-product__form-group"> */}
        {/* <label for="itemCode" className="new-product__form-label"> */}
        {/* barcode */}
        {/* </label> */}
        <input
          id="code"
          type="text"
          placeholder="아이템코드"
          onChange={(e) => updateFields({code:e.target.value})}
        />
        {/* </div> */}
        <input
          type="text"
          placeholder="item name"
          onChange={(e) => updateFields({name:e.target.value})}
        />
        <input
          type="number"
          placeholder="price"
          onChange={(e) => updateFields({price:e.target.value})}
        />
        <input
          type="textarea"
          placeholder="description"
          onChange={(e) => updateFields({description:e.target.value})}
        />
        <input
          type="text"
          placeholder="imgUrl"
          onChange={(e) => updateFields({imgUrl:e.target.value})}
        />
        <input
          type="text"
          placeholder="homeUrl"
          onChange={(e) => updateFields({homeUrl:e.target.value})}
        />
        <input
          type="number"
          // name="qty"
          // value={qty}
          // value={product.qty ?? Number(0)}
          placeholder="product qty"
          // step={5}
          // required
          onChange={(e) => updateFields({qty:Number(e.target.value)})}
        />
        {/* <input
          type="number"
          placeholder="qty"
          step={5}
          className="bg-brand p-3"
          onChange={(e) => setStock(e.target.value)}
        /> */}
        <button className="btn btn--primary" >
          아이템등록
        </button>
      </form>

      {/* {successMsg && <p>{successMsg}</p>} */}

      {/* {japitems.map((japitem) => ( */}
        {/* <div key={`${Date()}-${japitem}`}> */}
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
              src={addedJapitem.imgUrl}
              className="new-product__list-image mx-auto"
              style={{ width: "96px" }}
            />
            {/* </div> */}
            {/* <div className="new-product__list place-content-center"> */}
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
          {/* </div> */}

          <style>{`
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
        {/* </div> */}
      {/* ))} */}
    </div>
  )
}