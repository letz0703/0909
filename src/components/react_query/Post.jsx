import { useQuery } from "@tanstack/react-query"
import { getPost } from "../../api/posts"
import { getUser } from "../../api/users"

export default function Post({ id }) {
  const postQuery = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
    // refetchInterval: 1000,
    // staleTime: 1000,
  })
  const userQuery = useQuery({
    queryKey: ["users", postQuery?.data?.userId],
    enabled: postQuery?.data?.userId != null, // enable query only when you want them
    queryFn: () => getUser(postQuery.data.userId),
  })
  if (postQuery.status === "loading") return <h1>Loading...</h1>
  if (postQuery.status === "error") {
    return <h1>{JSON.stringify(postQuery.error)}</h1>
  }
  return (
    <>
      <h1>{postQuery.data.title}</h1>
      <small>
        {postQuery.data.userId}
        <br />
        {userQuery.isLoading
          ? "Loading User ..."
          : useQuery.isError
          ? "Error Loading User"
          : userQuery.data.name}
      </small>
      <p>{postQuery.data.body}</p>
    </>
  )
}
