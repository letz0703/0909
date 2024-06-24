import { useState } from "react"
import styles from "./search-input.module.css"
//import { BiSearch } from "react-icons/bi"
import "../../util/observer"
import { useContext } from "react"
import { SearchContext } from "../../App"
import { useEffect } from "react"
import { useMediaQuery } from "usehooks-ts"

export default function SearchInput() {
  const { setSearch } = useContext(SearchContext)
  const size = useMediaQuery("(min-width:768px)")

  return (
    //<div className={styles.inputGroup}>
    <div className={`${styles.inputGroup}`}>
      {size && (
        <button
          aria-label="button"
          className={`styles.icon mx-1 my-3 w-[2em] search__width`}
        >
          <BiSearch size={30} />
        </button>
      )}
      <input
        type="text"
        id="searchInput"
        className={`${styles.input}  ring-2 ring-slate-300 pl-4 text-xl h-[100%] w-[40dvw] lg:w-[50dvw] `}
        onChange={(e) => setSearch(e.target.value)}
        autoFocus
      />
    </div>
  )
}

/**
 *  expand search input
 * * https://youtu.be/DonxmmWW7Tk?t=1185
 */
