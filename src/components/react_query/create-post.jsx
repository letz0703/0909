import { useMutation } from "@tanstack/react-query"
import { useRef } from "react"
import { createPost } from "../../api/posts"

/* TODO: render page after createPostMutation */

export default function CreatePost({}) {
  const titleRef = useRef()
  const bodyRef = useRef()

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {},
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
      <div>{createPostMutation.isError && JSON.stringify(error)}</div>
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
