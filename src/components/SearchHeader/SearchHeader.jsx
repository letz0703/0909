import { useState, useEffect, useRef } from "react"
//import styles from './SearchHeader.module.css'
import { BsYoutube, BsSearch } from "react-icons/bs"
import { Link, useNavigate, useParams } from "react-router-dom"
export default function SearchHeader() {
  const { keyword } = useParams()
  const navigate = useNavigate()
  const [text, setText] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/videos/${text}`)
  }
  useEffect(() => {
    setText(keyword || "")
  }, [keyword])

  const showHistory = () => {
    window.location.replace("https://www.youtube.com/feed/history")
  }
  const gotoIC = () => {
    window.location.replace("https://www.youtube.com/feed/history")
  }

  return (
    <header className="w-full flex justify-around p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-youtube" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input
          type="text"
          placeholder="search..."
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
          className="sm:hidden w-7/12 p-2 px-4 outline-none border-none fs-2 bg-red-50  text-black"
        />
        <button className="bg-white px-4">
          <BsSearch />
        </button>
      </form>
      <button
        className="btn btn--primary mini"
        onClick={() => window.location.replace("https://wizbox.shop")}
      >
        i.canmart
      </button>
      <button onClick={showHistory} className="btn btn--danger mini">
        history
      </button>
    </header>
  )
}
