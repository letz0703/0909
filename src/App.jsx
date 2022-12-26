import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {useState} from "react"
import {Routes, Route, Outlet} from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import {AuthContextProvider} from "./context/AuthContext"
const queryClient = new QueryClient()
// import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import ShopHome from "./pages/ShopHome"

function App() {
  return (
    <Container>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Navbar />
          <Outlet />
        </AuthContextProvider>
      </QueryClientProvider>
    </Container>
  )
}

export default App
