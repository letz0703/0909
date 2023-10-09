import axios from "axios"
import { useLoaderData } from "react-router-dom"
import { getJ09 } from "../api/j09"

function Jap() {
  const j09 = useLoaderData()
  console.log(j09)
  return (
    <>
      <h1>Jap {j09.length}</h1>
    </>
  )
}

const loader = ({ request: { signal } }) => {
  return getJ09({ signal })
}

export const japRoute = {
  loader,
  element: <Jap />,
}
