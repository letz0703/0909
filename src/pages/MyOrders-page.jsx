import React from "react"
//import styles from './MySpecails-page.module.css'
import { useQuery, useMutation } from "@tanstack/react-query"
import { collection, getDoc, getDocs } from "firebase/firestore"
import { db } from "../api/firebase"
import Wait from "../util/wait"

const SPECIALS = [
  { id: 1, itemId: "2301-01", name: "JP-캬베진 300정", price: 10000 },
  { id: 2, itemId: "2301-02", name: "동전파스 156매 3개", price: 10000 },
]

export default function MySpecails() {
  console.log(SPECIALS)

  const specailsQuery = useQuery({
    queryKey: ["specails"],
    queryFn: () => Wait(1000).then(() => [...SPECIALS]),
    // queryFn: () => Promise.reject("Error"),
  })

  const specailsMutation = useMutation({
    mutationFn: (itemId) =>
      Wait(1000).then(() =>
        SPECIALS.push({
          id: crypto.randomUUID(),
          itemId: Date(),
          name: "New Name",
          price: 10000,
        })
      ),
  })

  if (specailsQuery.isLoading) return <h1>Loading...</h1>
  if (specailsQuery.isError)
    return <pre>{JSON.stringify(specailsQuery.error)}</pre>

  return (
    <div>
      <h1>Monlty JAP items</h1>
      <pre>1월의 공동구매 아이템: 캬베진 300정, 10,000원 </pre>
      <div>
        {specailsQuery.data.map((order) => (
          <div key={order.id}>itemId : {order.name}</div>
        ))}
      </div>
      <button onClick={() => specailsMutation.mutate("New Order")}>
        Add New Order
      </button>
      <style>{`
			.navbar__input, .navbar__youtube-icon{
				display: none;
			}
		`}</style>
    </div>
  )
}
