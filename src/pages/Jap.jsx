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

  const comment =
    "깡통시장 물건 다음날 수령(선배송). 공동구매 품목 해외주문(고객님의개인통관 번호 사용). 만원 할인된 가격 및 무료배송 (통관번호제공의 혜택). 일주일 후 통관(소유권=icanmart). 입금 후 10일간 해외주문 금지"
  const arr_jap_order_info = comment.split(".")

  return [
    <div className="jap__ flex flex-col align-items-start justify-start">
      <div className="jap__primary-header">
        <div className=" bg-pink-100 rounded-full">
          <h1 className="pt-5">해외 공동구매 안내</h1>
          <h3 className="text-2xl text-green-700 p-2 mx-3 my-0">
            2023년 3월 : 곤약젤리 3개 5000원
          </h3>
          <p className="mb-3">컵타입 복숭아 1봉지 + 짜먹는 타입 2봉지(랜덤)</p>
          <div className="font-semibold mb-2 p-2 text-xl bg-white">
            :공동구매품목:<div>곤약젤리 12개 + 동전파스 20개</div>
          </div>
          <div className="jap__info  p-3  mb-2 flex flex-col text-xl font-semibold ">
            {arr_jap_order_info.map((r) => {
              return (
                <li key={r} className="md:ml-40">
                  {r}
                </li>
              )
            })}
          </div>
          <div className="p-2 bg-blue-200 md:text-xl">
            다음 주문은 = 제품 통관 후 가능(7-10일)
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
        // min-height:50vw;
        // width: 97.2vw;
        display: flex;

      }
        .jap__info>li {
          list-style-type: decimal-leading-zero;
          font-size: 1rem;

        }

      `}</style>
    </div>,
  ]
}
