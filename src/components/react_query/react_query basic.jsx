import { useState, useEffect, useRef } from "react"
import { useQuery, useMutation } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Wait from "../../util/wait"

const POSTS = [
  { id: 1, title: "good1" },
  { id: 2, title: "good2" },
]

export default function ReactQuery() {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => Wait(1000).then(() => [...POSTS]),
    /** simulate error ↓ */
    // queryFn: () => Promise.reject("error message"),
  })

  if (postQuery.isLoading) return <h1>loading...</h1>
  if (postQuery.isError) return <pre>{JSON.stringify(postQuery.error)}</pre>

  return (
    <div>
      {postQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
