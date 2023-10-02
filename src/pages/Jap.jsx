import axios from "axios"

function Jap() {
  return (
    <>
      <h1>Jap</h1>
    </>
  )
}

async function loader({ request: { signal } }) {
  const res = await axios.get(`http://localhost:3000/japitems`, { signal })
  return res.data
}

export const japRoute = {
  loader,
  element: <Jap />,
}
