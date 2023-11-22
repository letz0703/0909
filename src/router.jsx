import {
  Navigate,
  createBrowserRouter,
  redirect,
  useRouteError,
} from "react-router-dom"
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
import { J09List } from "./pages/J09List"
import axios from "axios"
import { todoRoute } from "./components/todos/todolist"
import { tRoute } from "./pages/todo"
import { NewTodo } from "./pages/NewTodo"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        //errorElement: <NotFound />,
        children: [
          {
            errorElement: <ErrorPage />,
            children: [
              { index: true, element: <ShopHome /> },
              {
                path: "todos",
                children: [
                  { index: true, ...todoRoute },
                  {
                    path: "new",
                    element: <NewTodo />,
                    action: async ({ request }) => {
                      const formData = await request.formData()
                      const title = formData.get("title")
                      if (title === "") {
                        return "Title is required"
                      }

                      const todo = await fetch("http://localhost:3000/todos", {
                        method: "POST",
                        signal: request.signal,
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ title, completed: false }),
                      }).then((res) => res.json())
                      return redirect("/todos")
                    },

                    //action: async ({ request }) => {
                    //  const title = await request.formData().get("title")
                    //  const todo = await fetch("http://localhost:3000/todos", {
                    //    method: "POST",
                    //    signal: request.signal,
                    //    headers: {
                    //      "Content-Type": "application/json",
                    //    },
                    //    body: JSON.stringify({ title }),
                    //  })
                    //  console.log("hi")
                    //},
                  },
                  { path: ":todoId", ...tRoute },
                ],
              },
              {
                path: "/jap",
                children: [
                  {
                    index: true,
                    loader: ({ request: { signal } }) => {
                      const j09 = axios
                        .get(`/data/j09.json`, { signal })
                        .then((res) => res.data)
                      return j09
                    },
                    element: <J09List />,
                  },
                  { path: ":j09Id", element: <h1>J09 Detail</h1> },
                ],
              },
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
    ],
  },
])

function ErrorPage() {
  const error = useRouteError()

  return (
    <>
      {import.meta.env.MODE !== "production" && (
        <div className={`flex flex-col`}>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </div>
      )}
    </>
  )
}
