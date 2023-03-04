import { useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { getPost } from "../../api/posts"
import { PostListInfinite } from "../../pages/PostListInfinite"
import { PostListPaginated } from "../../pages/PostListPaginated"
import CreatePost from "./create-post"
import Post from "./Post"
import PostList1 from "./post-list-1"
import PostList2 from "./post-list-2"

export default function ReactQuery() {
  const [currentPage, setCurrentPage] = useState(<PostList1 />)
  const queryClient = useQueryClient()
  function onHoverPostOneLink() {
    queryClient.prefetchQuery({
      queryKey: ["posts", 1],
      queryFn: () => getPost(1),
    })
  }
  return (
    <div>
      <button onClick={() => setCurrentPage(<PostList1 />)}>
        공동구매 안내
      </button>
      <button onClick={() => setCurrentPage(<PostList2 />)}>Post List 2</button>
      <button
        onMouseEnter={onHoverPostOneLink} /**pre load post 1 */
        onClick={() => setCurrentPage(<Post id={1} />)}
      >
        First Post
      </button>
      <button
        onClick={() =>
          setCurrentPage(<CreatePost setCurrentPage={setCurrentPage} />)
        }
        className="btn btn--primary"
      >
        create a POST
      </button>
      <button onClick={() => setCurrentPage(<PostListPaginated />)}>
        Post List Paginated
      </button>
      <button onClick={() => setCurrentPage(<PostListInfinite />)}>
        Post List Paginated
      </button>
      <br />
      {currentPage}
    </div>
  )
  /**
   * ! fetch status
   * * postQuery.fetchStatus === "paused" // idle, fetching
   *https://youtu.be/r8Dg0KVnfMA?list=UULFFbNIlppjAuEX4znoulh0Cw&t=1260
   */

  /**
   * ! stale time
   * ? prevent instantly going back to stale state
   *https://youtu.be/r8Dg0KVnfMA?list=UULFFbNIlppjAuEX4znoulh0Cw&t=1341
   * *
   */
}
