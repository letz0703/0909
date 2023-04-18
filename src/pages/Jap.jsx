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
  })

  if (specialsQuery.isLoading) return <h1>Loading...</h1>
  if (specialsQuery.isError)
    return <pre>{JSON.stringify(specialsQuery.error)}</pre>

  return (
    <div className="jap__ flex flex-col align-items-start justify-start mt-[7vh]">
      <div className="jap__primary-header">
        <div className=" bg-pink-100 rounded-full">
          <div className="text-2xl pt-5">공동구매</div>
          <p>- japan 09 -</p>
          <h3 className="text-2xl text-green-700 p-2 mx-3 my-0"></h3>
          <div className="font-bold mb-2 p-2 text-xl bg-white">
            공동 구매 품목<div className="">곤약젤리 + 동전파스</div>
          </div>
          <div>
            주문 하신 깡통시장 상품 + 동전파스1개(무료)를 당일 발송해 드립니다
          </div>
          <div>(동전파스 대신 짜먹는 곤약 2개를 선택하셔도 됩니다)</div>

          <div className="underline">
            고객님의 개인통관 번호로 해외 공동 구매진행 합니다
          </div>
          <div>단, 공동구매 진행시에만 가능합니다(2023년 3월 현재 진행중)</div>
          <div className="mb-3">신청순으로 개별 문자 드립니다.</div>
          <div className="p-2 bg-blue-200 md:text-xl">
            다음 주문은 제품 통관 후 가능(7-10일)
          </div>
        </div>
        <div>
          {user || icUser ? (
            <Jap09Form icUser={icUser} />
          ) : (
            <button className="btn btn--primary" onClick={login}>
              google 로그인 및 신청
            </button>
          )}
        </div>
      </div>
      <style>{`
      .jap__{
        background-image:url('/imgs/bg_jap.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        max-height:max-content;
        // min-height:50vw;
        // width: 97.2vw;
        display: flex;

      }
        .jap__info>li {
          list-style-type: decimal-leading-zero;
          font-size: 1rem;

        }
      `}</style>
    </div>
  )
}
