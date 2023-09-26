import { Outlet } from "react-router-dom"
import App from "../App"

export function RootLayout() {
  return (
    <>
      <App />
      <Outlet />
    </>
  )
}
