import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState, useEffect } from "react"
import { Routes, Route, Outlet } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import { AuthContextProvider } from "./context/AuthContext"
import { Container } from "react-bootstrap"
import ShopHome from "./pages/ShopHome"
import { ShoppingCartProvider } from "./context/ShoppingCart"
import { v4 as uuidv4 } from "uuid"
import { createContext } from "react"
import { extraData } from "./data.js"
const queryClient = new QueryClient()
export const JapitemContext = createContext()
const LOCAL_STORAGE_KEY = "icanmart.japitems"

export const SearchContext = createContext()
export const TestContext = createContext()

function App() {
  const [japitems, setJapitems] = useState(() => {
    const japitemJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (japitemJSON == null) {
      return sampleJapitems
    } else {
      return JSON.parse(japitemJSON)
    }
  })

  const [search, setSearch] = useState("")
  // const [searchedJapitemId, setsearchedJapitemId] = useState()
  // const [japitem, setJapitem] = useState(sampleJapitem)

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const searchContextValue = { handleSearch, search }

  useEffect(() => {
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

  const japitemContextValue = {
    handleJapitemAdd,
    handleJapitemDelete,
  }

  const testContextValue = { extraData }

  return (
    <SearchContext.Provider value={searchContextValue}>
      <TestContext.Provider value={testContextValue}>
        <JapitemContext.Provider value={japitemContextValue}>
          <ShoppingCartProvider>
            <Container>
              <QueryClientProvider client={queryClient}>
                <AuthContextProvider>
                  <Navbar search={search} setSearch={setSearch} />
                  <Outlet />
                </AuthContextProvider>
              </QueryClientProvider>
            </Container>
          </ShoppingCartProvider>
        </JapitemContext.Provider>
      </TestContext.Provider>
    </SearchContext.Provider>
  )
}

const sampleJapitems = [
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
