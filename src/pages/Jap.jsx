import axios from "axios"
import { useLoaderData } from "react-router-dom"

function Jap() {
  const j09 = useLoaderData()
  return (
    <>
      <h1>Jap {j09.length}</h1>
    </>
  )
}

async function loader({ request: { signal } }) {
  const res = await axios.get(`http://localhost:3000/j09`, { signal })
  return res.data
}

export const japRoute = {
  loader,
  element: <Jap />,
}
