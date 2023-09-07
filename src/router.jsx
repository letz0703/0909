import {
  Navigate,
  Outlet,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom"
import App from "./App"
import NotFound from "./pages/NotFound"
import ShopHome from "./pages/ShopHome"
import Jap from "./pages/Jap"
import JapAdmin from "./components/jap-admin/jap-admin"
import Can from "./pages/Can"
import AllProducts from "./pages/AllProducts"
import ProtectedRoute from "./pages/ProtectedRoute"
import NewProduct from "./pages/NewProduct"
import JapitemDetail from "./pages/JapitemDetail"
import { PopCart } from "./components/PopCart"
import Store from "./pages/Store"
import VIP from "./pages/VIP"
import MyOrders from "./pages/MyOrders-page"
import Videos from "./pages/Videos"
import VideoDetail from "./pages/VideoDetail"
import Navbar from "./components/Navbar"

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "*", element: <Navigate to="/" /> },
      { path: "/", element: <ShopHome /> },
      { path: "/shop", element: <AllProducts /> },
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
      { path: "/store", element: <Store /> },
      { path: "/vip", element: <VIP /> },
      { path: "/my_orders", element: <MyOrders /> },
      { path: "/videos", element: <Videos /> },
      { path: "/videos/:keyword", element: <Videos /> },
      { path: "/videos/watch/:videoId", element: <VideoDetail /> },
    ],
  },
])

function NavLayout() {
  return <App />
}
