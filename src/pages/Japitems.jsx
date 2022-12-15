import {useQuery} from "@tanstack/react-query"
import {useState, useEffect, useRef} from "react"
import {useParams} from "react-router-dom"
import VidoeCard from "../components/VidoeCard/VidoeCard"
import axios from "axios"
//import styles from './Japitems.module.css'
// move below under export default

export default function Japitems() {
  const {keyword} = useParams()
  const {data: japitem, isLoading, error} = useQuery(
    ["japitem", keyword],
    async () => {
      return axios
        .get(`/items/${keyword ? "jap" : "can"}.json`)
        .then(res => res.data.items)
      /**
      .then (res => {
        console.log(res);
        return res.data.items
      })
    */
      /** fetch 사용시 axios.get 대신
      .then(res => res.json()시
      .then(data => data.items)
    */
    }
  )
  return (
    <div>
      Japitems {keyword ? `searched ${keyword}` : `no keyword so hot trend`}
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is Wrong 🥲</p>}
      {japitem && (
        <ul>
          {japitem.map(item => (
            <VidoeCard key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  )
}
