/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
//import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Container } from "react-bootstrap"
import { useEffect, useState, useDeferredValue } from "react"
import { Outlet } from "react-router-dom"
//import { Routes, Route, Outlet } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import { AuthContextProvider } from "./context/AuthContext"
//import ShopHome from "./pages/ShopHome"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { createContext } from "react"
import SearchHeader from "./components/SearchHeader/SearchHeader"
import { YoutubeApiProvider } from "./context/YoutubeApi"
import { DetailContextProvider } from "./context/DetailContext"
//import Detail from "./components/Detail"
//import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
//import { useDeferredValue } from "react"
import icuser from "./icuser.json"

//const queryClient = new QueryClient()
export const JapitemContext = createContext()
const LOCAL_STORAGE_KEY = "icanmcartItemIDart.japitems"

export const SearchContext = createContext()
function LayOut() {
  return (
    <>
      <div className={`outlet flex w-100vw mt-[16px]`}>
        <Outlet />
      </div>
      <style>{`
      body {
        //background-color: #c10002; color: black
      }
      .outlet {

      }
    `}</style>
    </>
  )
}
function App() {
  const [japitems, setJapitems] = useState(() => {
    const japitemJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    return JSON.parse(japitemJSON)
  })

  function isIcUser(code) {
    return icuser.map((item) => item.code.includes(code))
  }

  const [search, setSearch] = useState("")

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const searchContextValue = { handleSearch, search }

  useEffect(() => {
    return () => {
      setSearch("")
    }
  }, [])

  //function handleJapitemAdd() {
  //  const newJapitem = {
  //    id: crypto.randomUUID(),
  //    name: "new item",
  //    price: 10000,
  //  }
  //  setJapitems([...japitems, newJapitem])
  //}

  function handleJapitemDelete(id) {
    setJapitems(japitems.filter((japitem) => japitem.id !== id))
  }

  const japitemContextValue = {
    //handleJapitemAdd,
    handleJapitemDelete,
    japitems,
  }

  const search_def = useDeferredValue(search)

  if (location.pathname !== "/videos") {
    //const passcode = prompt("enter passcode")
    //if (passcode) {
    return (
      <>
        <SearchContext.Provider value={searchContextValue}>
          <ShoppingCartProvider>
            <DetailContextProvider>
              <Container>
                {/*<QueryClientProvider client={queryClient}>*/}
                <AuthContextProvider>
                  <JapitemContext.Provider value={japitemContextValue}>
                    <header>
                      <Navbar setSearch={setSearch} search={search_def} />
                    </header>
                    <LayOut japitems={japitems} className={`outlet`} />
                    {/* <ReactQueryDevtools /> */}
                  </JapitemContext.Provider>
                </AuthContextProvider>
                {/*</QueryClientProvider>*/}
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
          {/*<QueryClientProvider client={queryClient}>*/}
          <Outlet />
          {/*</QueryClientProvider>*/}
        </YoutubeApiProvider>
      </>
    )
  }
  //} else return
}

export default App
