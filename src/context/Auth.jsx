import {createContext, useState, useContext, useEffect} from "react"
import {login, logout, onUserStateChange} from "../api/firebase"

const AuthContext = createContext({})

export function AuthProvider({children}) {
  const [user, setUser] = useState()

  useEffect(() => {
    onUserStateChange(user => {
      // console.log(user)
      setUser(user)
    })
  }, [])
  // const [Auth, setAuth] = useState(false)
  // 	const toggleAuth = () => {
  // 	setAuth(prev => !prev)
  // 	updateAuth()
  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
