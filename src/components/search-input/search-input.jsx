import { useState } from "react"
import styles from "./search-input.module.css"
import { BiSearch } from "react-icons/bi"
import "../../util/observer"

export default function SearchInput({ setSearch }) {
  const [item_to_search, setItem_to_search] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (item_to_search === "") return
    setSearch(item_to_search)
  }

  return (
    <div className={styles.inputGroup}>
      <button aria-label="button" className={`styles.icon mx-2 my-3`}>
        <BiSearch size={30} />
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="searchInput"
          className={`${styles.input}   ring-2 ring-slate-300 pl-4 text-xl `}
          placeholder="Search"
          aria-label="search"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  )
}

/**
 * ! expand search input
 * * https://youtu.be/DonxmmWW7Tk?t=1185
 */
