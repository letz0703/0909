import React, { useState } from "react"
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
import { login } from "../api/firebase"

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
  const { user, isAdmin } = useAuthContext()
  const [icUser, setIcUser] = useState(false)

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

  async function passUser() {
    const passCode = ["0909"]
    const userCode = prompt("enter your code")
    if (userCode.includes(passCode)) {
      setIcUser(true)
    } else {
      alert("코드가 없습니다")
      setIcUser(false)
    }
  }

  return (
    <div className="jap__ flex flex-col align-items-start justify-start">
      <div className="jap__primary-header">
        <div className="w-full h-full align-top bg-pink-100">
          <h1 className="pt-3">스페셜 공동구매</h1>
          <h3 className="text-2xl text-green-700 pb-1">
            2023년 3월 캬베진 300정:만원
          </h3>
          <p className="font-semibold mb-2">
            공동구매 상품: 곤약젤리, 동전파스
          </p>
          <div className="jap__info  p-3 text-left mb-2">
            <div>
              - 특별가 상품(jap)으로 1개만 주문 가능합니다(특가+무료배송)
            </div>
            <div>
              - 재 주문은 이전 주문이 도착한 후 가능합니다(7~10일 소요){" "}
            </div>
            <div>
              - 깡통시장 상품(store)은 상시 구매 가능합니다(기본배송비: 4000원)
            </div>
            <div>- 저희 재고가 많으면 해외주문이 일시중단 후 재개 됩니다.</div>
          </div>
        </div>
        {user || icUser ? (
          <Jap09Form icUser={icUser} />
        ) : (
          <>
            <button className="btn btn--primary" onClick={login}>
              google 로그인
            </button>
            {/* <span>or</span> */}
            {/* <button className="btn btn--primary" onClick={passUser}>
              현장방문 시 수령한 코드입력
            </button> */}
          </>
        )}
        {/* <Jap09Form /> */}
      </div>
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
      <style>{`
      .jap__{
        background-image:url('/imgs/bg_jap.jpg');
        background-repeat: no-repeat;
        background-position: start;
        background-size: cover;
        max-height:max-content;
        min-height:50vw;
        width: 100vw;
      }
        .jap__info {
        }

      `}</style>
    </div>
  )
}
