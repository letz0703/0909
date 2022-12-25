import React from "react"
import ReactDOM from "react-dom/client"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
// import App from "./App"
// import App from "./App2"
import App from "./App3"
import "bootstrap/dist/css/bootstrap.min.css"
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <ShopHome />},
      {
        path: "/products",
        element: (
          // <ProtectedRoute requireAdmin>
          <AllProducts />
          // </ProtectedRoute>
        )
      },
      {path: "/products/new", element: <NewProduct />},
      {path: "/products/:id", element: <ProductDetail />},
      {
        path: "/carts",
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        )
      },
      {path: "/videos", element: <Videos />},
      {path: "/videos/:keyword", element: <Videos />},
      {path: "/videos/watch/:videoId", element: <VideoDetail />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
