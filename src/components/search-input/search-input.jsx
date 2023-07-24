import { useState } from "react"
import styles from "./search-input.module.css"
import { BiSearch } from "react-icons/bi"
//import useDebounce from "../../hooks/use-debounce"

export default function SearchInput({ setSearch }) {
  const [item_to_search, setItem_to_search] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (item_to_search === "") return
    setSearch(item_to_search)
  }
  return (
    // <div className={` ${styles.searchInput}`}>
    <div className="_searchInput">
      {/* <div className={styles.searchInput__content}> */}
      <div>
        <div className={styles.search_bar}>
          <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit}>
              {/*<input type="text" name="searchItem" ref={ref_search} />*/}
              <input
                type="text"
                id="searchInput"
                className={` ${styles.input} text-xl px-3 box`}
                placeholder="save 1%"
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
            </form>
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
