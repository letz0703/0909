import {Outlet} from "react-router-dom"
import SearchHeader from "./components/SearchHeader/SearchHeader"
// import App from "./App"
import styles from "./App2.module.css"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {YoutubeApiProvider} from "./context/YoutubeApi"
const queryClient = new QueryClient()

function App() {
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

export default App
