/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import { Routes, Route, Outlet } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import { AuthContextProvider } from "./context/AuthContext"
import ShopHome from "./pages/ShopHome"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { createContext } from "react"
import SearchHeader from "./components/SearchHeader/SearchHeader"
import { YoutubeApiProvider } from "./context/YoutubeApi"
import { DetailContextProvider } from "./context/DetailContext"
import Detail from "./components/Detail"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useDeferredValue } from "react"

const queryClient = new QueryClient()
export const JapitemContext = createContext()
const LOCAL_STORAGE_KEY = "icanmcartItemIDart.japitems"

export const SearchContext = createContext()

function App() {
  const [japitems, setJapitems] = useState(() => {
    const japitemJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    return JSON.parse(japitemJSON)
  })

  const [search, setSearch] = useState("")

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const searchContextValue = { handleSearch, search }

  function handleJapitemAdd() {
    const newJapitem = {
      id: crypto.randomUUID(),
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

  if (location.pathname !== "/videos") {
    return (
      <>
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
      </>
    )
  } else {
    return (
      <>
        <SearchHeader />
        <YoutubeApiProvider>
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </YoutubeApiProvider>
      </>
    )
  }
}

export default App
