import { useLoaderData } from "react-router-dom"

export function J09List() {
  const j09 = useLoaderData()
  return <h1>J09 List {j09?.length}</h1>
}
