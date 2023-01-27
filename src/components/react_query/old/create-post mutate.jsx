import { useMutation } from "@tanstack/react-query"
import { useRef } from "react"
import { createPost } from "../../../api/posts"

export default function CreatePost() {
  const titleRef = useRef()
  const bodyRef = useRef()

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (data, variables, context) => {
      console.log(context)
    },
    onMutate: (variables) => {
      return { hi: "Bye" }
    },
    // mutationFn: (variables) => createPost(variables),
    /**keys for useMutation
    onSuccess:(data, varialbes, context)
    onError:(error, varialbes, context)
    onSettled: (data, error, variables, context)
    onMutate: (variables) //← called before mutationFn

     */
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
