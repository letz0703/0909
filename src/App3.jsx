import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {useState} from "react"
import {Outlet} from "react-router-dom"

import "./App.css"
import Navbar from "./components/Navbar"
import {AuthProvider} from "./context/Auth"
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Navbar />
        <Outlet />
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
