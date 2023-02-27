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
import { useNavigate, Navigate } from "react-router-dom"

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
  const navigate = useNavigate()

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
          <h1 className="pt-3">해외 공동구매 안내</h1>
          <h3 className="text-2xl text-green-700 pb-1">
            곤약젤리 복숭아(컵형) 2개를 특별가(5천원)에 드립니다.
          </h3>
          <p className="font-semibold mb-2">
            공동구매 품목: 곤약젤리 12개 + 동전파스 20개
          </p>
          <div className="jap__info  p-3 text-left mb-2">
            <div>
              <li>- 기다림 없이 물건 부터 바로 받는 해외주문 서비스 입니다</li>
              <li>
                - 고객님의 개인통관고유번호로 공동구매 하며, 통관된 물건은 저희
                소유가 됩니다.
              </li>
              <li>
                - 신청 후 입금 안내 드리며, 입금 확인 후 해외주문을 넣고 물건을
                바로 보냅니다
              </li>
              <li>- 깡통시장 제품을 먼저 드리며, 평균 다음날 도착 합니다.</li>
              <li>- 다른 깡통 제품을 추가 하셔도 기본 택배비는 무료 입니다</li>
            </div>
            <div>
              - 다음 주문은 이전 해외주문이 저희쪽에 도착 후 가능 합니다(7~10일
              소요){" "}
            </div>
            <div>
              - 저희 주문 시 함께 주문하는 서비스 상품이며, 고객이 많으면 일시
              중단 합니다.
            </div>
            <div>- 재개시 신청순으로 개별 문자 드립니다.</div>
          </div>
        </div>
        {user || icUser ? (
          <Jap09Form icUser={icUser} />
        ) : (
          <>
            <button className="btn btn--primary" onClick={login}>
              google 로그인 및 신청
            </button>
            {/* <span>or</span> */}
            {/* <button className="btn btn--primary" onClick={passUser}>
              현장방문 시 수령한 코드입력
            </button> */}
          </>
        )}
        {/* <Jap09Form /> */}
      </div>
      {isAdmin ? (
        <button onClick={() => navigate("/jap/ic")}>admin page</button>
      ) : (
        ""
      )}
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
        background-position: center;
        background-size: cover;
        max-height:max-content;
        min-height:50vw;
        width: 97.2vw;
      }
        .jap__info {
        }

      `}</style>
    </div>
  )
}
