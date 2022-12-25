import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {useState} from "react"
import {Outlet} from "react-router-dom"

import "./App.css"
import Navbar from "./components/Navbar"
import {AuthContextProvider} from "./context/AuthContext"
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App
