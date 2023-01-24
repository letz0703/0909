import { useState, useEffect, useRef } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Wait from "../../util/wait"
import FormatCurrency from "../../util/formatCurrency"

const POSTS = [{ id: 1, name: "캬베진 300정", price: 10000 }]

export default function JorderQuery() {
  const queryClient = useQueryClient()

  const jorderQuery = useQuery({
    queryKey: ["jorder"],
    queryFn: () => Wait(1000).then(() => [...POSTS]),
    /** simulate error ↓ */
    // queryFn: () => Promise.reject("error message"),
  })

  const jorderMutation = useMutation({
    mutationFn: async (name, price) => {
      await Wait(1000)
      return POSTS.push({ id: crypto.randomUUID(), name, price })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["jorder"])
    },
  })

  if (jorderQuery.isLoading) return <h1>loading...</h1>
  if (jorderQuery.isError) {
    return <pre>{JSON.stringify(jorderQuery.error)}</pre>
  }

  return (
    <>
      <div>
        {jorderQuery.data.map((jorder) => (
          <div key={jorder.id}>
            {jorder.name} {FormatCurrency(jorder.price)}
          </div>
        ))}
      </div>
      <button
        disabled={jorderMutation.isLoading}
        onClick={() => jorderMutation.mutate("new post", Number(3000))}
        className="btn btn--primary mini"
      >
        Add New
      </button>
    </>
  )
}
