import React from "react"
//import styles from './Jap-page.module.css'
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { collection, getDoc, getDocs } from "firebase/firestore"
import { db } from "../api/firebase"
import Wait from "../util/wait"

const SPECIALS = [
  { id: 1, itemId: "2301-01", name: "JP-캬베진 300정", price: 10000, limit: 5 },
  {
    id: 2,
    itemId: "2301-02",
    name: "동전파스 156매 3개",
    price: 10000,
    limit: 30,
  },
]

export default function Jap() {
  console.log(SPECIALS)

  const queryClient = useQueryClient()

  const specialsQuery = useQuery({
    queryKey: ["specials"],
    queryFn: () => Wait(1000).then(() => [...SPECIALS]),
    // queryFn: () => Promise.reject("Error"),
  })

  const specialsMutation = useMutation({
    mutationFn: (itemId) =>
      Wait(500).then(() =>
        SPECIALS.push({
          id: crypto.randomUUID(),
          itemId: Date(),
          name: "New Name",
          price: 10000,
          limit: 10,
        })
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(["specials"])
    },
  })

  if (specialsQuery.isLoading) return <h1>Loading...</h1>
  if (specialsQuery.isError)
    return <pre>{JSON.stringify(specialsQuery.error)}</pre>

  return (
    <div className="japMain">
      <h1>스페셜 공동구매</h1>
      <pre>1월의 공동구매 아이템: 캬베진 300정, 10,000원 </pre>
      <div>
        {specialsQuery.data.map((order) => (
          <div key={order.id}>itemId : {order.name}</div>
        ))}
      </div>
      <form></form>
      <button
        disabled={specialsMutation.isLoading}
        onClick={() => specialsMutation.mutate("New Order")}
        className="btn btn--primary"
      >
        Add New
      </button>
      <style>{`
			.navbar__input, .navbar__youtube-icon{
				display: none;
			}
		`}</style>
    </div>
  )
}
