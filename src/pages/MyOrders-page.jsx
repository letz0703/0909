import React from "react"
import { v4 as uuidv4 } from "uuid"
//import styles from './MyOrders-page.module.css'
import { collection, getDoc, getDocs } from "firebase/firestore"
import { db } from "./api/firebase"

export default function MyOrders() {
		useEffect(() => {

		}, []);
  const data = getDocs()
  return (
    <div>
      MyOrders
      <style>{`
			.navbar__input, .navbar__youtube-icon{
				display: none;
			}
		`}</style>
    </div>
  )
}
