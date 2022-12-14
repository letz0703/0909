import {useState, useEffect, useRef} from "react"
import {useParams} from "react-router-dom"
//import styles from './Videos.module.css'

export default function Videos() {
  const {keyword} = useParams()
  // move below under export default
  const {
    data: videos,
    isLoading,
    error
  } = useQuery(["videos", keyword], async () => {
    const res = await fetch(`/videos/${keyword ? "search" : "popular"}.json`)
    return await res.json()
  })
  return (
    <h1>
      Videos {keyword ? `searched ${keyword}` : `no keyword so hot trend`}
    </h1>
  )
}
