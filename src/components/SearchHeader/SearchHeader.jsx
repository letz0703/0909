import { useState, useMemo, useEffect, useRef } from "react"
//import { BsYoutube, BsSearch } from "react-icons/bs"
import formstyle from "./formstyle.css?inline"
import styles from "../search-input/search-input.module.css"
import { useNavigate, useParams } from "react-router-dom"
export default function SearchHeader() {
  const { keyword } = useParams()
  const navigate = useNavigate()
  const [text, setText] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/videos/${text}`)
  }

  useMemo(() => {
    setText(keyword || "")
  }, [keyword])
  //useEffect(() => {
  //  setText(keyword || "")
  //}, [keyword])

  const showHistory = () => {
    window.location.replace("https://www.youtube.com/feed/history")
  }
  const gotoIC = () => {
    window.location.replace("https://www.youtube.com/feed/history")
  }

  return (
    <header className={`${styles.header}`}>
      <NavLink to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-youtube" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </NavLink>
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
