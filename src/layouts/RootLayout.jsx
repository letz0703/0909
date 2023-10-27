import { Outlet, useNavigation } from "react-router-dom"
import App from "../App"

export function RootLayout() {
  const { state } = useNavigation()
  const isLoading = state === "loading"

  return (
    <>
      <App />
      {isLoading && <div className={`loading-spinner`} />}
    </>
  )
}
