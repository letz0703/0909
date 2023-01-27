import { useState } from "react"
import Post from "../Post"
import PostList1 from "../post-list-1"
import PostList2 from "../post-list-2"

export default function ReactQuery() {
  const [currentPage, setCurrentPage] = useState(<PostList1 />)

  return (
    <div>
      <button onClick={() => setCurrentPage(<PostList1 />)}>Post List 1</button>
      <button onClick={() => setCurrentPage(<PostList2 />)}>Post List 2</button>
      <button onClick={() => setCurrentPage(<Post id={1} />)}>
        First Post
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
