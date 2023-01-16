import { initializeApp } from 'firebase/app';
import { v4 as uuid } from 'uuid';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set, get, remove } from 'firebase/database'

const {
  VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_DOMAIN,
  VITE_FIREBASE_DATABASE_URL,
  VITE_FIREBASE_PROJECTID,
  VITE_FIREBASE_STORAGE_BUCKET
} = import.meta.env

const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: VITE_FIREBASE_DOMAIN,
  databaseURL: VITE_FIREBASE_DATABASE_URL,
  projectId: VITE_FIREBASE_PROJECTID,
  storageBucket: VITE_FIREBASE_STORAGE_BUCKET
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export const database = getDatabase(app)
export const db = getFirestore(app)

export function login() {
  signInWithPopup(auth, provider).catch(console.error)
}

export function logout() {
  signOut(auth).catch(console.error)
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async user => {
    const updatedUser = user ? await adminUser(user) : null
    callback(updatedUser)
  })
}

async function adminUser(user) {
  return get(ref(database, "admins")) //
  // return get(ref(db, "admins")) //
    .then(snapshot => {
      if (snapshot.exists()) {
        const admins = snapshot.val()
        const isAdmin = admins.includes(user.uid)
        return {...user, isAdmin}
      }
      return user
    })
}

export async function addNewProduct(product, image) {
  const id = uuid()
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image,
    options: product.options.split(",")
  })
}

export async function addNewOrder(product, image) {
  const id = uuid()
  return set(ref(database, `orders/${id}`), {
    ...order,
    id,
    qty: parseInt(product.qty),
    image
  })
}

export async function getProducts() {
  return get(ref(database, "products")).then(snapshot => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val())
    }
    return []
  })
}

export async function getOrders() {
  return get(ref(database, "orders")).then(snapshot => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val())
    }
    return []
  })
}

export async function getCart(userId) {
  return get(ref(database, `carts/${userId}`)) //
    .then(snapshot => {
      const items = snapshot.val() || {}
      return Object.values(items)
    })
}

export async function addOrUpdateToCart(userId, product) {
  return set(ref(database, `carts/${userId}/${product.id}`), product)
}

export async function removeFromCart(userId, productId) {
  return remove(ref(database, `carts/${userId}/${productId}`))
}
