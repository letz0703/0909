import { useQueries, useQuery } from "@tanstack/react-query"
import { getPost, getPosts } from "../../api/posts"

export default function PostList1() {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    // refetchInterval: 1000,
    // staleTime: 1000,
    // initialData: [{ id: 1, title: "Welcome to Icanmart" }],
    placeHolderData: { id: 1, title: "Welcome to Icanmart" },
  })

  // const queries = useQueries({
  //   queries: (postQuery?.data ?? []).map((post) => {
  //     return {
  //       queryKey: ["posts", post.id],
  //       queryFn: () => getPost(post.id),
  //     }
  //   }),
  // })
  // console.log(queries.map((q) => q.data))

  if (postQuery.status === "loading") return <h1>Loading...</h1>
  if (postQuery.status === "error") {
    return <h1>{JSON.stringify(postQuery.error)}</h1>
  }
  return (
    <>
      <h1>1월 공동구매 안내</h1>
      <p className="text-green-700">
        1월의 아이템은 캬베진 300정. 1만원 입니다
      </p>
      <div>고객님의 개인통관번호로 캬베진 6개를 일본에 주문합니다</div>
      <div>개인 통관 번호와 전화번호를 남겨 주시면 문자 드립니다</div>
      <div>입금 확인 후 깡통시장 제품 1개를 당일 발송해 드립니다</div>
      <div>일주일에서 열흘 후 통관되는 6개는 저희 물건이 됩니다.</div>
      <div>스페셜 주문 고객은 택배비가 무료입니다</div>
      <div>
        깡통시장 구매 대행 상품을 함께 주문 하셔도 기본 택배비는 무료입니다
      </div>
      <div>
        특별가를 제공해 드리는 이유는 고객님은 통관번호를 제공하는 대신, 다른
        분들이 국내외 배송비를 대신 부담하기 때문입니다.
      </div>
      <div>단 주문은 1개만 가능 하며 선착순 몇분 께만 제공 가능합니다</div>
      <div>통관시 고객님께 개별 안내 문자가 세관서 발송됩니다</div>
      <div>캬베진 외 제품은 수입하지 않으므로 신경 쓰지 않으셔도 됩니다</div>
      <div className="text-red-700">
        주문 시점에서 일주일간 개인적 수입을 하셔서는 안됩니다
      </div>
      <div>이를 어겨서 관세가 발생하게 될 경우 저희는 책임지지 않습니다</div>
      <div>캬베진 이외의 제품을 일체 주문 하지 않습니다</div>
      <div>일주일에서 열흘 후 통관 된 제품의 소유권은 저희에게 있습니다</div>
      <ol>
        {postQuery.data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </>
  )
}
