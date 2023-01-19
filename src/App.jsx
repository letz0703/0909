import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Container } from "react-bootstrap"
import { useState } from "react"
import { Routes, Route, Outlet } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import { AuthContextProvider } from "./context/AuthContext"
import ShopHome from "./pages/ShopHome"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { v4 as uuidv4 } from "uuid"
import { createContext } from "react"
import { extraData } from "./data.js"
import { collection, getDocs } from "firebase/firestore"
import { db } from "./api/firebase"
const queryClient = new QueryClient()
export const JapitemContext = createContext()
const LOCAL_STORAGE_KEY = "icanmart.japitems"

export const SearchContext = createContext()

function App() {
  const japitemsRef = collection(db, "japitems")
  const [japitems, setJapitems] = useState(() => {
    const japitemJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    // if (japitemJSON == null) {
    // setJapitems(sampleJapitems)
    // } else {
    const getJapitems = async () => {
      const data = await getDocs(japitemsRef)
      setJapitems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    return JSON.parse(japitemJSON)
    // }
  })

  const [search, setSearch] = useState("")

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const searchContextValue = { handleSearch, search }

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(japitems))
  // }, [japitems])

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
    japitems,
  }

  return (
    <SearchContext.Provider value={searchContextValue}>
      <ShoppingCartProvider>
        <Container>
          <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
              <JapitemContext.Provider value={japitemContextValue}>
                <Navbar setSearch={setSearch} search={search} />
                {/* <Navbar search={search} setSearch={setSearch} /> */}
                <Outlet japitems={japitems} />
              </JapitemContext.Provider>
            </AuthContextProvider>
          </QueryClientProvider>
        </Container>
      </ShoppingCartProvider>
    </SearchContext.Provider>
  )
}

const sampleJapitems = [
  {
    id: uuidv4(),
    code: 1234,
    name: "샤론파스 80매",
    price: 10000,
    imgUrl: "/imgs/shron80.jpg",
  },
  {
    id: uuidv4(),
    code: 5678,
    name: "동전파스 156매 2각",
    price: 10000,
    imgUrl: "/imgs/donjunpas156.jpg",
  },
]

export default App
