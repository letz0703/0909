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
      /**
       * ! manual cache update
       * ? 포스트 작성 후 즉각 볼 수 있게
       * * setQueryData([], data)
       * 2023.01.28/토
       */
      queryClient.setQueryData(["posts", data.id], data)
      queryClient.invalidateQueries(["posts", { exact: true }])
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
