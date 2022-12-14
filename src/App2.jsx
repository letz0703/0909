import {Outlet} from "react-router-dom"
import SearchHeader from "./components/SearchHeader/SearchHeader"
// import App from "./App"

function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  )
}

export default App
