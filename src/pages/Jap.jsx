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

const loader = ({ request: { signal } }) => {
  return axios
    .get(`http://localhost:3000/j09`, { signal })
    .then((res) => res.data)
}

export const japRoute = {
  loader,
  element: <Jap />,
}
