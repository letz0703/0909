import {initializeApp} from "firebase/app"

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "firebase/auth"

import {getDatabase, ref, child, get} from 'firebase/database'

const {
  VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_DOMAIN,
  VITE_FIREBASE_DATABASE_URL,
  VITE_FIREBASE_PROJECTID
} = import.meta.env

const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: VITE_FIREBASE_DOMAIN,
  databaseURL: VITE_FIREBASE_DATABASE_URL,
  projectId: VITE_FIREBASE_PROJECTID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const provider = new GoogleAuthProvider()
const database = getDatabase(app)

export async function login() {
  return signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user
      console.log(user)
      return user
    })
    .catch(console.error)
}
export async function logout() {
  // return signOut(auth).then(() => null)
  signOut(auth).catch(console.error)
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null
    callback(updatedUser)
  })
}

async function adminUser(user){
  return get(ref(database, 'admins'))//
    .then((snapshot) => {
    if (snapshot.exists()) {
      const admins = snapshot.val();
      const isAdmin = admins.includes(user.uid)
      return {...user, isAdmin}
    }
      return user;
  })
}