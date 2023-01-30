import { useState, useEffect, useRef } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Wait from "../../../util/wait"

const POSTS = [
  { id: 1, title: "good1" },
  { id: 2, title: "good2" },
]

export default function ReactQuery() {
  const queryClient = useQueryClient()

  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => Wait(1000).then(() => [...POSTS]),
    /** simulate error ↓ */
    // queryFn: () => Promise.reject("error message"),
  })

  const postMutation = useMutation({
    mutationFn: async (title) => {
      await Wait(1000)
      return POSTS.push({ id: crypto.randomUUID(), title })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"])
    },
  })

  if (postQuery.isLoading) return <h1>loading...</h1>
  if (postQuery.isError) {
    return <pre>{JSON.stringify(postQuery.error)}</pre>
  }

  return (
    <>
      <div>
        {postQuery.data.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
      <button
        disabled={postMutation.isLoading}
        onClick={() => postMutation.mutate("new post")}
        className="btn btn--primary mini"
      >
        Add New
      </button>
    </>
  )
}
/**
 * youtube : https://youtu.be/r8Dg0KVnfMA?list=UULFFbNIlppjAuEX4znoulh0Cw&t=780
 * ! invalidate query data and refresh data
 * ? refech data
 * import {useQueryClient} from "tanstack"
 * * App() 아래에
 *  const queryClient = useQueryClient
 *  사용: queryClient.invalidateQuries(["posts"])
 */
