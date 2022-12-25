import {createContext, useState, useContext, useEffect} from "react"
import {login, logout, onUserStateChange} from "../api/firebase"

const AuthContext = createContext({})

export function AuthProvider({children}) {
  const [user, setUser] = useState()

  useEffect(() => {
    onUserStateChange(user => setUser(user))
  }, [])
  return (
    <AuthContext.Provider value={{user, uid: user && user.uid, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
