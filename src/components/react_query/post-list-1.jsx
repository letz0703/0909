import { useQueries, useQuery } from "@tanstack/react-query"
import { getPost, getPosts } from "../../api/posts"

export default function PostList1() {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    refetchInterval: 1000,
    // staleTime: 1000,
  })

  // const queries = useQueries({
  //   queries: (postQuery?.data ?? []).map((post) => {
  //     return {
  //       queryKey: ["posts", post.id],
  //       queryFn: () => getPost(post.id),
  //     }
  //   }),
  // })
  // console.log(queries.map((q) => q.data))

  if (postQuery.status === "loading") return <h1>Loading...</h1>
  if (postQuery.status === "error") {
    return <h1>{JSON.stringify(postQuery.error)}</h1>
  }
  return (
    <>
      <h1>PostList1</h1>
      <ol>
        {postQuery.data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </>
  )
}
