import { useState, useEffect, useRef } from "react"
import styles from "./search-input.module.css"
import { BiSearch } from "react-icons/bi"
export default function SearchInput({ setSearch }) {
  return (
    // <div className={` ${styles.searchInput}`}>
    <div className="">
      {/* <div className={styles.searchInput__content}> */}
      <div>
        <div className={styles.search_bar}>
          {/* <form> */}
          <div className="flex">
            <input
              type="text"
              className={` ${styles.input} text-xl -mr-8 ml-2  `}
              placeholder="search..."
              aria-label="search"
              autoFocus
              onChange={(e) => setSearch(e.target.value)}
            />
            <button aria-label="submit" className={styles.submit}>
              {/* <div className="search_icon pr-2"> */}
              <div className={`${styles.search_icon} mr-2`}>
                <BiSearch />
              </div>
            </button>
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  )
}

/**
 * ! expand search input
 * * https://youtu.be/DonxmmWW7Tk?t=1185
 */
