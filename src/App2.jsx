import {Outlet} from "react-router-dom"
import SearchHeader from "./components/SearchHeader/SearchHeader"
// import App from "./App"
import styles from "./App2.module.css"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
const queryClient = new QueryClient()

function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  )
}

export default App
