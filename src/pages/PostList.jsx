import axios from "axios"

function PostList() {
  return <h1>PostList</h1>
}

const loader = async ({ request: { signal } }) => {
  const res = await axios.get(`http://localhost:3000/`, { signal })
  return res.data
}

export const postListRoute = {
  loader,
  element: <PostList />,
}
