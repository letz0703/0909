import React, { useState } from "react"
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
import { Accordion } from "./Accordion"

//const SPECIALS = [
//  { id: 1, itemId: "2301-01", name: "JP-캬베진 300정", price: 10000, limit: 5 },
//  {
//    id: 2,
//    itemId: "2301-02",
//    name: "동전파스 156매 3개",
//    price: 10000,
//    limit: 30,
//  },
//]

export default function Jap() {
  const { user, isAdmin } = useAuthContext()
  const [icUser, setIcUser] = useState(false)
  const navigate = useNavigate()

  const queryClient = useQueryClient()
  //const specialsQuery = useQuery({
  //  queryKey: ["specials"],
  //  queryFn: () => Wait(300).then(() => [...SPECIALS]),
  //})

  //if (specialsQuery.isLoading) return <h1>Loading...</h1>
  //if (specialsQuery.isError)
  //  return <pre>{JSON.stringify(specialsQuery.error)}</pre>
  /**
   * Open HTML
   */
  function openPopupWindow() {
    window.open(
      "./japan09.html",
      "일본현지공동구매",
      "width=800rem, height=600rem"
    )
  }

  return (
    <div className="jap__ flex flex-col align-items-center w-screen justify-start">
      <div className="jap__primary-header">
        <div className=" bg-pink-100 rounded-full flex flex-col justify-center align-items-center ">
          <h2 className="text-2xl p-2 mx-3 my-0">일본 현지제품 공동구매</h2>
          <div className="bg-white w-[50%] flex flex-col justify-center p-2 mb-2">
            {/*<div className="font-bold mb-2 p-2 text-xl bg-white w-[300px] flex flex-col ">*/}
            공동 구매 품목
            <div className="mt-1">
              2023년 6월:{" "}
              <span className={`text-red-500 text-2xl p-2 m-2`}>곤약젤리</span>
            </div>
          </div>
          <div className="underline">
            고객님의 개인통관로 공동 구매진행 합니다(150불 이하만)
          </div>
          <div className={`p-2`}>
            주문한 깡통시장 상품들과 곤약젤리(오리히로) 1봉지를 무료로 당일z
            발송해 드립니다.(랜덤 맛)
          </div>
          <button
            onClick={openPopupWindow}
            className={`pointer btn--primary p-2`}
          >
            진행 단계 보기
          </button>
          <div>아래 동의서는 6장입니다</div>
          <div className="p-2 bg-blue-200 md:text-xl ">
            신청후 10일간 다른 해외 주문을 하지 않는 조건입니다.
            {/*<div className="p-2 bg-blue-200 md:text-xl">*/}
            {/*다음 주문은 제품 통관 후 가능(7-10일)*/}
            {/*</div>*/}
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
        </div>
      </div>
      {/*<Accordion />*/}
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
