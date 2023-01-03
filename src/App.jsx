import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState, useEffect } from "react"
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
import { createContext } from "react"

export const JapitemContext = createContext()

const LOCAL_STORAGE_KEY = "0909.japitems"

function App() {
  // const [japitem, setJapitem] = useState(sampleJapitem)
  const [japitems, setJapitems] = useState(() => {
    const japitemJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (japitemJSON == null) {
      return sampleJapitems
    } else {
      return JSON.parse(japitemJSON)
    }
  })

  useEffect(() => {
    console.log("usee render")
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(japitems))
  }, [japitems])

  function handleJapitemAdd() {
    const newJapitem = {
      id: uuidv4(),
      name: "new item",
      price: 10000,
    }
    setJapitems([...japitems, newJapitem])
  }

  function handleJapitemDelete(id) {
    setJapitems(japitems.filter((japitem) => japitem.id !== id))
  }

  const japitemContextValue = { handleJapitemAdd, handleJapitemDelete }

  return (
    <JapitemContext.Provider value={japitemContextValue}>
      <ShoppingCartProvider>
        <Container>
          <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
              <Navbar />
              <Outlet japitems={japitems} />
            </AuthContextProvider>
          </QueryClientProvider>
        </Container>
      </ShoppingCartProvider>
    </JapitemContext.Provider>
  )
}

const sampleJapitems = [
  {
    id: uuidv4(),
    file: "file",
    name: "샤론파스 140매",
    price: 14500,
    category: "love",
    description: "wow",
    options: "big,small,large",
  },
  {
    id: uuidv4(),
    name: "오타이산 포",
    price: 15000,
    category: "love",
    description: "wow",
    options: "big,small,large",
  },
]

export default App
