import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import App from "./App"
// import App from "./App2"
import App from "./App"
import "./index.css"
import AllProducts from "./pages/AllProducts"
import MyCart from "./pages/MyCart"
import NewProduct from "./pages/NewProduct"
import NotFound from "./pages/NotFound"
import ProductDetail from "./pages/ProductDetail"
import ProtectedRoute from "./pages/ProtectedRoute"
import ShopHome from "./pages/ShopHome"
import VideoDetail from "./pages/VideoDetail"
import Videos from "./pages/Videos"
import Jap from "./pages/Jap"
import Can from "./pages/Can"
import "./css/app.css"
import JapitemDetail from "./pages/JapitemDetail"
import Store from "./pages/Store"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <ShopHome /> },
      {
        path: "/jap",
        element: <Jap />,
      },
      {
        path: "/can",
        element: <Can />,
      },
      {
        path: "/products",
        element: (
          // <ProtectedRoute requireAdmin>
          <AllProducts />
          // </ProtectedRoute>
        ),
      },
      {
        path: "/products/new",
        element: (
          // <ProtectedRoute requireAdmin>
          <NewProduct />
          // </ProtectedRoute>
        ),
      },
      { path: "/products/:id", element: <JapitemDetail /> },
      // { path: "/japitems/:id", element: <JapitemDetail /> },
      {
        path: "/carts",
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
      { path: "/shop", element: <Store /> },
      { path: "/videos", element: <Videos /> },
      { path: "/videos/:keyword", element: <Videos /> },
      { path: "/videos/watch/:videoId", element: <VideoDetail /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
