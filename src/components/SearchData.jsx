import React, { useContext } from "react"
import { JapitemContext, SearchContext, TestContext } from "../App"

const SearchData = ({ japitems }) => {
  // const { japitems } = useContext(JapitemContext)
  const { search } = useContext(SearchContext)

  return (
    <>
      {japitems
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
