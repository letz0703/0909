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
    <div className="japMain flex flex-col align-items-center justify-center">
      <div className="jap__primary-header">
        <div className="w-full h-full bg-cover">
          <h1>스페셜 공동구매</h1>
          <h3 className="text-2xl text-green-700">
            2023년 3월 캬베진 300정:만원
          </h3>
          <p className="font-semibold ">공동구매 상품: 곤약젤리, 동전파스</p>
          <div className="09info bg-yellow-100 p-3 text-left">
            <div>특별가 상품으로 1회 주문당 1개만 주문 가능합니다</div>
            <div>재주문은 이전주문이 도착한 후 가능합니다(7~10일 소요) </div>
            <div>
              재고가 많을 경우, 주문을 받지 않으며, 재개 시 선착순 문자드립니다
            </div>
          </div>
        </div>
        <Jap09Form />
      </div>
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
