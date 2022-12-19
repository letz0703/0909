import {useState, useEffect, useRef} from "react"
import {Navigate} from "react-router-dom"
import {useAuthContext} from "../context/Auth"
//import styles from './ProtectedRoute.module.css'
export default function ProtectedRoute({children, requireAdmin}) {
  const {user} = useAuthContext()
  if (!user || (requireAdmin && !user.isAmin)) {
    return <Navigate to="/" replace />
  }
  return children
}
