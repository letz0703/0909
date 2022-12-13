import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Home</p>,
    errorElement: <h1>🥲 Not Found</h1>
  },
  {
    path: "/jap",
    element: <p>Order To Japan</p>
  },
  {
    path: "/can",
    element: <p>CanMart Items</p>
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
