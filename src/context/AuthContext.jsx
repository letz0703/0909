import { createContext, useContext, useEffect, useState } from "react"
import { login, logout, onUserStateChange } from "../api/firebase"

const AuthContext = createContext()

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState()
  useEffect(() => {
    // hasCustomNumber(user)
    onUserStateChange((user) => setUser(user))
  }, [])
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAdmin: user?.isAdmin,
        isCustom: user?.isCustom,
        uid: user && user.uid,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}
