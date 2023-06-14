import App from "./App"
//import App from "./components/wds_use_fetch/wds_use_fetch.jsx"
//import App from "./App2"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
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
import { PopCart } from "./components/PopCart"
import MyOrders from "./pages/MyOrders-page"
import JapAdmin from "./components/jap-admin/jap-admin"
import VIP from "./pages/VIP"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <ShopHome /> },
      {
        path: "/jap",
        element: <Jap />,
      },
      {
        path: "/jap/ic",
        element: <JapAdmin />,
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
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      { path: "/japitems/:id", element: <JapitemDetail /> },
      {
        path: "/carts",
        element: <PopCart />,
      },
      { path: "/shop", element: <Store /> },
      { path: "/vip", element: <VIP /> },
      { path: "/my_orders", element: <MyOrders /> },
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
