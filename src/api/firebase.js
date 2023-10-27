import { initializeApp } from "firebase/app"
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import { get, getDatabase, ref, remove, set, update } from "firebase/database"
import { getFirestore } from "firebase/firestore"
import { v4 as uuid } from "uuid"

const {
  VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_DOMAIN,
  VITE_FIREBASE_DATABASE_URL,
  VITE_FIREBASE_PROJECTID,
  VITE_FIREBASE_STORAGE_BUCKET,
} = import.meta.env

const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: VITE_FIREBASE_DOMAIN,
  databaseURL: VITE_FIREBASE_DATABASE_URL,
  projectId: VITE_FIREBASE_PROJECTID,
  // storageBucket: VITE_FIREBASE_STORAGE_BUCKET
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export const database = getDatabase(app)
export const db = getFirestore(app)
// export const userId = auth.currentUser?.uid

export function login() {
  signInWithPopup(auth, provider)
    .then((result) =>
      //(result) => console.log(JSON.stringify(result.user))
      localStorage.setItem("ic-user", JSON.stringify(result.user))
    )
    //.then(() => window.location.replace("/"))
    .catch(console.error)
}

export function logout() {
  signOut(auth).catch(console.error)
}

export function updateRDB_user(value) {
  const fbUser = (prev) => {
    return {
      ...prev,
      // name: auth.currentUser?.displayName || "",
      // uid: auth.currentUser?.uid || crypto.randomUUID(),
      // email: auth.currentUser?.email,
      // phoneNumber: auth.currentUser?.phoneNumber || "",
      // photoUrl: auth.currentUser?.photoURL || "",
      value,
    }
  }
  // localStorage.setItem("ic-user", JSON.stringify(fbUser))

  return update(ref(database, `users/${fbUser?.uid}`), { ...fbUser })
}

export async function getRDB_users() {
  return get(ref(database, `users`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const users = snapshot.val()
        // console.log('users:',users)
        return users
        // return { ...users }
      } else {
        console.log("get users")
      }
    })
    .catch((error) => console.log(error))
}

export async function getRDB_user(userId) {
  return get(ref(database, `users/${userId}`)) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const user = snapshot.val()
        return user
      } else {
        //console.log("not rdb user")
      }
    })
    .catch((error) => console.log(error))
}
export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null
    if (!user?.isAdmin && user?.customNumber) {
      customUser(user)
    }
    callback(updatedUser)
  })
}

async function adminUser(user) {
  return (
    get(ref(database, "admins")) //
      // return get(ref(db, "admins")) //
      .then((snapshot) => {
        if (snapshot.exists()) {
          const admins = snapshot.val()
          const isAdmin = admins.includes(user?.uid)
          return { ...user, isAdmin }
        }
        return user
      })
      .catch((error) => console.log(error))
  )
}

// function addCustomNumber(num){
//   const db_custom = getDatabase()
//   set(ref(db_custom,`users/`+userId),{...user } )
// }

async function customUser(user) {
  return get(ref(database, "customs")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const customs = snapshot.val()
        const isCustom = customs.includes(user?.id)
        return { ...user, isCustom }
      } else {
        console.log("no data")
      }
      return user
    })
    .catch((error) => console.log(error))
}

export async function addNewProduct(product, image) {
  const id = uuid()
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image,
    options: product.options.split(","),
  }).catch((error) => console.log(error))
}

export async function updateQuantity(prev, itemQty) {
  update(ref(database, `/japitems/${prev.id}`), {
    qty: itemQty,
  })
  console.log("data qty updated")
}

export async function updateJapitemQty(prev, qty) {
  update(ref(database, `japitems/{$prev.id}`), {
    qty,
  }).catch((error) => console.log(error))
}

export async function updateFBPrice(prev, itemPrice) {
  update(ref(database, `/japitems/${prev.id}`), {
    price: itemPrice,
  })
  console.log("data price updated")
}

//export async function updateCartTotal(value) {
//  console.log("wow")
//  //update(ref(database, `/carts/${prev.userId}/${prev.cartId}`), {
//  //  ...prev,
//  //  total: value,
//  //})
//}

export async function getTotal(userId, cartId) {
  const snapshot = await get(ref(database, `Total/${userId}/${cartId}`))
  const cartTotal = snapshot.val().total || {}
  return Object.values(cartTotal)
}

export async function addNewOrder(product, image) {
  const id = crypto.randomUUID()
  return set(ref(database, `orders/${id}`), {
    ...order,
    id,
    qty: parseInt(product.qty),
    image,
  })
}

export async function addNewCart(
  userId,
  cartId,
  local__icCart,
  addressTo,
  phoneNumber,
  total,
  deliveryDate
) {
  const address = addressTo || "배송지요함"
  const updatedUser = await updateRDB_user(address)
  const cartData = {
    addressTo: address || null,
    cartId,
    cartItems: local__icCart,
    orderDate: new Date(),
    phoneNumber: phoneNumber || null,
    status: "입금확인전",
    total: total,
    userId,
  }
  return update(ref(database, `carts/${userId}/${cartId}`), cartData)
}

export async function getProducts() {
  // return get(ref(database, "japitems")).then(snapshot => {
  return get(ref(database, "products"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val())
      }
      return []
    })
    .catch((error) => console.log(error))
}

export async function getOrders() {
  return get(ref(database, "carts"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val())
      }
      return []
    })
    .catch((error) => console.log(error))
}

export async function getMyOrder(userId) {
  return get(ref(database, `carts/${userId}/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val())
      }
      return []
    })
    .catch((error) => console.log(error))
}

export async function getCarts() {
  const snapshot = await get(ref(database, `carts/`))
  const carts = snapshot.val() || []
  return Object.values(carts)
}

export async function getCart(userId) {
  return get(ref(database, `carts/${userId}`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {}
      return Object.values(items)
    })
    .catch((error) => console.log(error))
}
export async function getJorders() {
  get(ref(database, `customers/jorders`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {}
      return Object.values(items)
    })
    .catch((error) => console.log(error))
}
/**
 * q: who ar you ?
 * a:
 */
export async function getJorder(uid) {
  get(ref(database, `customers/jorders/${uid}`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {}
      return Object.values(items)
    })
    .catch((error) => console.log(error))
}

export async function getRDB_Japitem(JapitemID) {
  return get(ref(database, `japitems/${JapitemID}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const item = snapshot.val()
        return item
      }
      return []
    })
    .catch((error) => console.log(error))
}

// export async function getRDB_Japitem(JapitemID) {
//   return get(ref(database, `japitems/${JapitemID}`)) //
//     .then(snapshot => {
//       const japitems = snapshot.val() || {}
//       return Object.values(japitems)
//     })
// }

export async function addOrUpdateToCart(userId, product) {
  return set(ref(database, `carts/${userId}/${product.id}`), product)
}

export async function removeFromCart(userId, productId) {
  return remove(ref(database, `carts/${userId}/${productId}`))
}

export async function setRDB_user(userID, cartUser) {
  set(ref(database, `users/{${userID}}`), {
    ...cartUser,
  })
}
