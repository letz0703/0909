import {useState, useEffect, useRef} from "react"
//import styles from './SearchHeader.module.css'
import {BsYoutube, BsSearch} from "react-icons/bs"
import {Link, useNavigate, useParams} from "react-router-dom"
export default function SearchHeader() {
  const {keyword} = useParams()
  const navigate = useNavigate()
  const [text, setText] = useState("")
  const handleSubmit = e => {
    e.preventDefault()
    navigate(`/videos/${text}`)
  }
  useEffect(() => {
    setText(keyword || "")
  }, [keyword])

  return (
    <header>
      <Link to="/">
        <BsYoutube />
        <h1>Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search..."
          value={text}
          onChange={e => {
            setText(e.target.value)
          }}
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  )
}
