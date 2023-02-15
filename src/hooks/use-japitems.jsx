import { v4 as uuidv4 } from "uuid"
import { getOrders, database, db } from "../api/firebase"
import { getDatabase, ref, set, get, remove, child } from 'firebase/database'
import { useContext, useEffect, useState } from "react"
// import {
//   getDocs,
//   addDoc,
//   collection,
//   doc,
//   updateDoc,
//   deleteDoc,
// } from "firebase/firestore"
import FormatCurrency from "../util/formatCurrency"
import { SearchContext } from "../App"
import { useNavigate } from "react-router-dom"
import useProducts from "../hooks/use-products"
import { useLocalStorage } from "../hooks/use-local-storage"


export const useJapitems = () => {
  // const japitemRef = collection(db, "japitems") //customNo, userId
  // const [japitems, setJapitems] = useState([])
  const [japitems, setJapitems] = useLocalStorage("japitems", [])

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

  // useEffect(() => {
  //   const getJapitems = async () => {
  //     const data = await getDocs(japitemRef)
  //     setJapitems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  //   }
  //   getJapitems()
  // }, [])
  useEffect(() => {
    get(ref(database,"japitems")).then(snapshot => {
      if(snapshot.exists()){
        const data =  Object.values(snapshot.val())
        setJapitems(prev => [...prev, ...data])
      }
      return [japitems]
    })

  }, []);

  return [japitems, setJapitems]
}
