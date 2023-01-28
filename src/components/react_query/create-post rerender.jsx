import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRef } from "react"
import { createPost } from "../../api/posts"
import Post from "./Post"

export default function CreatePost({ setCurrentPage }) {
  const titleRef = useRef()
  const bodyRef = useRef()
  const queryClient = useQueryClient()

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["posts", { exact: true }])
      /** TODO: 포스트 작성 결과 즉시 반영
** queryClient.invalidateQueries(['posts', {exact:true}]) // posts로 시작되는 모든게 리렌더 되는 걸 방지
render page after createPostMutation */
      setCurrentPage(<Post id={data.id} />)
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createPostMutation.mutate({
      title: titleRef.current.value,
      body: bodyRef.current.value,
    })
  }

  return (
    <>
      <div>
        {createPostMutation.isError && JSON.stringify(createPostMutation.error)}
      </div>
      <h1>CreatePost</h1>
      <form onSubmit={handleSubmit}>
        <div className="create-post__title">
          <label htmlFor="title">Title</label>
          <input id="title" ref={titleRef} />
        </div>
        <div className="create-post__body">
          <label htmlFor="body">Body</label>
          <input id="body" ref={bodyRef} />
        </div>
        <button disabled={createPostMutation.isLoading}>
          {createPostMutation.isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </>
  )
}
