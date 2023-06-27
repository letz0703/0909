import { useState, useEffect, useRef } from "react"
import styles from "./search-input.module.css"
import { BiSearch } from "react-icons/bi"
import useDebounce from "../../hooks/use-debounce"

export default function SearchInput({ setSearch }) {
  return (
    // <div className={` ${styles.searchInput}`}>
    <div className="">
      {/* <div className={styles.searchInput__content}> */}
      <div>
        <div className={styles.search_bar}>
          <div className="flex justify-center items-center">
            <input
              type="text"
              id="searchInput"
              className={` ${styles.input} text-xl px-3 `}
              placeholder="Life is not a problem to solve."
              aria-label="search"
              autoFocus
              // onChange={(e) => console.log(e.target.value)}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button aria-label="submit" className={styles.submit}>
              {/* <div className="search_icon pr-2"> */}
              <div className={`${styles.search_icon}`}>
                <BiSearch className={`pl-3`} size={30} />
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
