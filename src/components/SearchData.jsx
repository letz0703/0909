import React, { useContext } from "react"
import { SearchContext, TestContext } from "../App"
//import styles from './SearchData.module.css'

const SearchData = () => {
  const { handleSearch, search } = useContext(SearchContext)
  const { extraData } = useContext(TestContext)

  return (
    <>
      {extraData
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.name.toLowerCase().includes(search)
        })
        .map((row) => {
          return (
            <div key={row.id}>
              <h1>{row.name}</h1>
              <p>{row.price}</p>
            </div>
          )
        })}
    </>
  )
}

export default SearchData
