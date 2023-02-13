import React from "react"
//import styles from './Jap-page.module.css'
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { collection, getDoc, getDocs } from "firebase/firestore"
import { db, database, auth } from "../api/firebase"
import Wait from "../util/wait"
import ReactQuery from "../components/react_query/react_query"
import SpecialsQuery from "../components/react_query/specials_query"
import Notice from "../components/notice/notice"
import { useAuthContext } from "../context/AuthContext"
import Jap09Form from "../components/jap09-form/jap09-form"
import JapEsp from "../components/jap___esp/jap___esp"

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
  const queryClient = useQueryClient()
  const specialsQuery = useQuery({
    queryKey: ["specials"],
    queryFn: () => Wait(300).then(() => [...SPECIALS]),
    // queryFn: () => Promise.reject("Error"),
  })
  const specialsMutation = useMutation({
    mutationFn: (itemId) =>
      Wait(300).then(() =>
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
    <div className="japMain flex flex-col align-items-center">
      <div className="jap__primary-header">
        <h1>스페셜 공동구매</h1>
        <div>저희가 수입 주문 시 함께 주문을 넣기 때문에</div>
        <div>
          소수의 분들께만 제공 합니다
          <br /> 오프라인 시장에서 뵈었던 분들께만 제공하는 특별가 서비스 입니다
        </div>
      </div>
      <Jap09Form />
      <JapEsp />
      {/* <div>
        {specialsQuery.data.map((order) => (
          <div key={crypto.randomUUID()}>
            <div>itemId : {order.name}</div>
            <div>남은 고객수: {order.limit}명</div>
          </div>
        ))}
      </div> */}
      {/* <button
        disabled={specialsMutation.isLoading}
        onClick={() => specialsMutation.mutate("New Order")}
        className="btn btn--primary"
      >
        Add New
      </button> */}
    </div>
  )
}
