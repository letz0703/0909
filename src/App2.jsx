import {Outlet} from "react-router-dom"
import SearchHeader from "./components/SearchHeader/SearchHeader"
// import App from "./App"
import styles from "./App2.module.css"

function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  )
}

export default App
