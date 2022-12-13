import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Jap from "./pages/Jap"
import Can from "./pages/Can"
import NotFound from "./pages/NotFound"
import Root from "./pages/Root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Home />},
      {path: "/jap", element: <Jap />},
      {path: "/can", element: <Can />}
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
