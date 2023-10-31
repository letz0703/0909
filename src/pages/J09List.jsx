import { useLoaderData } from "react-router-dom"

export function J09List() {
  const j09 = useLoaderData()
  console.log(j09)
  return (
    <h1>
      일본 현지 주문 (주문 아이템 + )
      {j09?.map((j, i) => (
        <div className={`p-3`}>
          <div>일본 현지 상품 공동구매</div>
          <div>- 주문 아이템 + 공구템 -</div>
          <div>물건은 주문 다음날 수령</div>
          <h1 key={j.id}>0{j.id}</h1>
          <p>{j.item}</p>
          <a href={j.info}>공동구매 안내(필독)</a>
        </div>
      ))}
    </h1>
  )
}
