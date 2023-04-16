//// import { useAuthContext } from "../../context/AuthContext"
//import { v4 as uuidv4 } from "uuid"
//import { getOrders, database, db } from "../../api/firebase"
//import { useEffect, useState } from "react"
//import {
//  getDocs,
//  addDoc,
//  collection,
//  setIndexConfiguration,
//} from "firebase/firestore"

//export default function Customs() {
//  const [newCustom, setNewCustom] = useState("")
//  const [newUser, setNewUser] = useState("")
//  // const { user, uid } = useAuthContext()
//  const [customNumbers, setCustomNumbers] = useState([])
//  const customsRef = collection(db, "customs") //customNo, userId

//  const createCustom = async () => {
//    await addDoc(customsRef, { customNo: newCustom, age: newUser })
//  }
//  useEffect(() => {
//    const getCustomNumbers = async () => {
//      const data = await getDocs(customsRef)
//      setCustomNumbers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
//    }
//    getCustomNumbers()
//  }, [])

//  return (
//    <div>
//      <input
//        type="text"
//        placeholder="통관번호"
//        onChange={(e) => setNewCustom(e.target.value)}
//      />
//      <input
//        type="text"
//        placeholder="userId"
//        onChange={(e) => setNewUser(e.target.value)}
//      />
//      <button className="btn btn--primary" onClick={createCustom}>
//        개인통관번호 입력
//      </button>
//      {customNumbers.map((custom) => (
//        <div key={uuidv4()}>
//          <div>custom number: {custom.customNo}</div>
//          <div>사용자 id: {custom.userId}</div>
//        </div>
//      ))}
//    </div>
//  )
//}
