import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Jap from "./pages/Jap"
import Can from "./pages/Can"
import NotFound from "./pages/NotFound"
import Root from "./pages/Root"
import CanItemDetail from "./pages/CanItemDetail"
import MainProduct from "./components/Main_product"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Home />},
      {path: "/jap", element: <Jap />},
      {path: "/can", element: <Can />},
      {path: "/can/:itemName", element: <CanItemDetail />}
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <QueryClientProvider client={queryClient}>
          <MainProduct />
        </QueryClientProvider>
      </RouterProvider>
    </>
  )
}

export default App
