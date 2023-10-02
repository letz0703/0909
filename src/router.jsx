import { createBrowserRouter } from "react-router-dom"
import "./components/wds/form/styles.css"
import NotFound from "./pages/NotFound"
import ShopHome from "./pages/ShopHome"
import { japRoute } from "./pages/Jap"
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
import { RootLayout } from "./layouts/RootLayout"
import axios from "axios"

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          { path: "/", element: <ShopHome /> },
          {
            path: "/japitems",
            //element: <AllProducts />,
            children: [
              { index: true, element: <AllProducts /> },
              { path: ":id", element: <JapitemDetail /> },
            ],
          },
          { path: "/shop", element: <AllProducts /> },
          {
            path: "jap",
            children: [
              {
                index: true,
                ...japRoute,
              },
              { path: ":japId", element: <h1>Jap09</h1> },
            ],
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
            element: <AllProducts />,
          },
          {
            path: "/products/new",
            element: (
              <ProtectedRoute requireAdmin>
                <NewProduct />
              </ProtectedRoute>
            ),
          },
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
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
  },
])
