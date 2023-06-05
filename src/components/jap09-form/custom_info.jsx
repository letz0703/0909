import { useState } from "react"
import FormWrapper from "./form-wrapper"
import { Agree } from "./Agree"
import { useEffect } from "react"

export default function CustomInfo() {
  let SpecialSelected = "special-selected.jsx"

  const [deleteRequest, setDeleteRequest] = useState(false)

  function handleDeleteRequest() {
    setDeleteRequest((prev) => !prev)
  }

  useEffect(() => {
    localStorage.setItem("deleteRequest", JSON.stringify(deleteRequest))
  }, [deleteRequest])

  return (
    <div className="bg-blue-100 p-4 rounded-b-xl">
      {/* <FormWrapper title="통관 상세 안내"></FormWrapper> */}
      <h2 className="text-xl mb-3 bg-red-200 text-black p-3 font-bold">
        감사 합니다
      </h2>
      {/*<p>본 상품은 오프라인 방문 고객분들을 위한 서비스 상품입니다.</p>*/}
      {/*<p>신청 → 개인통관번호 확인 → 개별 문자 드립니다.</p>*/}
      <p>주문 확인 후 개별 문자 드립니다.</p>
      <p>다음 공동구매 주문은 이전 주문의 통관완료 이후 가능합니다</p>
      {/*<p>고객님의 통관번호는 삭제 요청이</p>*/}
      {/*<p>공동구매 후 동의서를 유지하시려면 아래에 체크 하세요</p>*/}
      {/*<p>체크가 없을 경우 개인통관 번호은 통관 1개월 내 삭제 하며</p>*/}
      {/*<p>재주문 시 다시 동의 신청 하셔야 합니다</p>*/}
      <Agree
        deleteRequest={deleteRequest}
        handleDeleteRequest={handleDeleteRequest}
      />

      <style>{`
        .special-selected {
        }
      `}</style>
    </div>
  )
}
