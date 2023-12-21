import App from "./App"
//import App from "./components/wds_use_fetch/wds_use_fetch.jsx"
//import App from "./components/wds/form/AppForm.jsx"
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
import Can from "./pages/Can"
import "./css/app.css"
import JapitemDetail from "./pages/JapitemDetail"
import Store from "./pages/Store"
import { PopCart } from "./components/PopCart"
import MyOrders from "./pages/MyOrders-page"
import JapAdmin from "./components/jap-admin/jap-admin"
import VIP from "./pages/VIP"
import { router } from "./router"
import ErrorBoundary from "./ErrorBoundary"
import { Child } from "./Child"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h1>Error in child</h1>}>
      <RouterProvider router={router} />
      {/*<>
        <h1>Parent</h1>
        <Child />
      </>*/}
    </ErrorBoundary>
  </React.StrictMode>
)
