import { Container } from "react-bootstrap"
import { useEffect, useState, useDeferredValue, useRef } from "react"
import { Outlet } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import { AuthContextProvider } from "./context/AuthContext"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { createContext } from "react"
import SearchHeader from "./components/SearchHeader/SearchHeader"
import { YoutubeApiProvider } from "./context/YoutubeApi"
import { DetailContextProvider } from "./context/DetailContext"
import icuser from "./icuser.json"

export const JapitemContext = createContext()
export const SearchContext = createContext()

function LayOut() {
  return (
    <>
      <div className={`outlet flex w-100vw mt-[16px]`}>
        <Outlet />
      </div>
    </>
  )
}

const LOCAL_STORAGE_KEY = "japitems"

function App() {
  const [japitems, setJapitems] = useState(() => {
    const japitemJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (japitemJSON == null) return []
    return JSON.parse(japitemJSON)
  })
  const [search, setSearch] = useState("")

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(""))
  }, [japitems])

  function isIcUser(code) {
    return icuser.map((item) => item.code.includes(code))
  }

  function reducer(state, { type, payload }) {
    return state
  }

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const searchContextValue = { handleSearch, search }

  useEffect(() => {
    return () => {
      setSearch("")
    }
  }, [])

  if (location.pathname !== "/videos") {
    return (
      <>
        <SearchContext.Provider value={searchContextValue}>
          <ShoppingCartProvider>
            {/*<DetailContextProvider>*/}
            <Container>
              {/*<QueryClientProvider client={queryClient}>*/}
              <AuthContextProvider>
                {/*<JapitemContext.Provider value={japitemContextValue}>*/}
                {/*<header>*/}
                <Navbar search={search} setSearch={setSearch} />
                {/*<Navbar setSearch={setSearch} search={search_def} />*/}
                {/*</header>*/}
                <LayOut japitems={japitems} className={`outlet`} />
                {/* <ReactQueryDevtools /> */}
                {/*</JapitemContext.Provider>*/}
              </AuthContextProvider>
              {/*</QueryClientProvider>*/}
            </Container>
            {/*</DetailContextProvider>*/}
          </ShoppingCartProvider>
        </SearchContext.Provider>
      </>
    )
  } else {
    return (
      <>
        <SearchHeader />
        <YoutubeApiProvider>
          <Outlet />
        </YoutubeApiProvider>
      </>
    )
  }
}

export default App
