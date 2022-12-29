import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Jap from "./pages/Jap"
import Can from "./pages/Can"
import Shop from "./pages/Shop"
import NotFound from "./pages/NotFound"
import Root from "./pages/Root"
import CanItemDetail from "./pages/CanItemDetail"
import MainProduct from "./components/Main_product"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { TanStackRouterDevTools } from "@tanstack/react-router-devtools"
import {
  Outlet,
  RouterProvider,
  Link,
  createReactRouter,
  createRouteConfig,
} from "@tanstack/react-router"
const queryClient = new QueryClient()

const rootRoute = createRouteConfig()
// {
// component: () => {
//   ;<>
//     <div>
//       <Link to="/jap">Jap</Link>
//       <Link to="/can">Can</Link>
//       <Link to="/shop">Shop</Link>
//       <hr />
//       <Outlet />
//     </div>
//   </>
// },
// }

const indexRoute = rootRoute.createRoute({
  path: "/",
  // component: Home,
})
const japRoute = rootRoute.createRoute({
  path: "/jap",
  component: Jap,
})
const canRoute = rootRoute.createRoute({
  path: "/can",
  component: Can,
})
const shopRoute = rootRoute.createRoute({
  path: "/shop",
  component: Shop,
})

const routeConfig = rootRoute.addChildren([
  indexRoute,
  japRoute,
  canRoute,
  shopRoute,
])

const router = createReactRouter({ routeConfig })

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <NotFound />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "/jap", element: <Jap /> },
//       { path: "/can", element: <Can /> },
//       { path: "/can/:itemName", element: <CanItemDetail /> },
//     ],
//   },
// ])

// const TanStackRouterDevtools =
//   process.env.NODE_ENV === "production"  ? () => null // Render nothing in production
//     : React.lazy(() =>
//         // Lazy load in development
//         import("@tanstack/react-router-devtools").then((res) => ({
//           default: res.TanStackRouterDevtools,
//           // For Embedded Mode
//           // default: res.TanStackRouterDevtoolsPanel
//         }))
//       )

function App() {
  return (
    <>
      <RouterProvider router={router}>
        {/* <TanStackRouterDevtools router={router} initialIsOpen={true} /> */}
        <QueryClientProvider client={queryClient}>
          <MainProduct />
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </RouterProvider>
    </>
  )
}

export default App
