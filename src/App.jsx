import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"
import { Routes, Route, Outlet } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import { AuthContextProvider } from "./context/AuthContext"
const queryClient = new QueryClient()
// import {Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import ShopHome from "./pages/ShopHome"
import { ShoppingCartProvider } from "./context/ShoppingCart"
import { v4 as uuidv4 } from "uuid"

function App() {
  const [japitem, setJapitem] = useState(sampleJapitem)
  return (
    <ShoppingCartProvider>
      <Container>
        <QueryClientProvider client={queryClient}>
          <AuthContextProvider>
            <Navbar />
            <Outlet />
          </AuthContextProvider>
        </QueryClientProvider>
      </Container>
    </ShoppingCartProvider>
  )
}

const sampleJapitem = [
  {
    id: uuidv4(),
    name: "샤론파스 140매",
    price: 14500,
  },
  {
    id: uuidv4(),
    name: "오타이산 포",
    price: 15000,
  },
]

export default App
