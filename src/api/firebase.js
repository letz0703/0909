import {initializeApp} from "firebase/app"

import {getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from "firebase/auth"

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

export async function login() {
  return signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user
      console.log(user)
      return user;
    })
    .catch(console.error)
}
export async function logout() {
  return signOut(auth).then(() => null);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, user => {
      callback(user);
      /**Navbar서 useEffect */
  })
}