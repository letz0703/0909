import { createContext } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Container } from "react-bootstrap"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import { AuthContextProvider } from "./context/AuthContext"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { v4 as uuidv4 } from "uuid"
import { db } from "./api/firebase"
import SearchHeader from "./components/SearchHeader/SearchHeader"
import { YoutubeApiProvider } from "./context/YoutubeApi"
import { DetailContextProvider } from "./context/DetailContext"
import { useDeferredValue } from "react"
import { useJapitems } from "./hooks/use-japitems"

const queryClient = new QueryClient()
export const JapitemContext = createContext()
const LOCAL_STORAGE_KEY = "icanmcartItemIDart.japitems"

export const SearchContext = createContext()

function App() {
  const [japitems, setJapitems] = useJapitems()
  const [search, setSearch] = useState("")

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const searchContextValue = { handleSearch, search }

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

  const search_def = useDeferredValue(search)
  return (
    <>
      {location.pathname !== "/videos" ? (
        <SearchContext.Provider value={searchContextValue}>
          <ShoppingCartProvider>
            <DetailContextProvider>
              <Container>
                <QueryClientProvider client={queryClient}>
                  <AuthContextProvider>
                    <JapitemContext.Provider value={japitemContextValue}>
                      <Navbar setSearch={setSearch} search={search_def} />
                      <Outlet japitems={japitems} />
                      {/* <ReactQueryDevtools /> */}
                    </JapitemContext.Provider>
                  </AuthContextProvider>
                </QueryClientProvider>
              </Container>
            </DetailContextProvider>
          </ShoppingCartProvider>
        </SearchContext.Provider>
      ) : (
        <>
          <SearchHeader />
          <YoutubeApiProvider>
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </YoutubeApiProvider>
        </>
      )}
    </>
  )
}

export default App
