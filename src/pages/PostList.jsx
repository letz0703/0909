import axios from "axios"

function PostList() {
  return <h1>PostList</h1>
}

const loader = ({ request: { signal } }) => {
  return axios.get(`http://localhost:3000/`, { signal }).then((res) => res.data)
}

export const postListRoute = {
  loader,
  element: <PostList />,
}
