import {useQuery} from "@tanstack/react-query"
import {useState, useEffect, useRef} from "react"
import {useParams} from "react-router-dom"
import VidoeCard from "../components/VidoeCard/VidoeCard"
import axios from "axios"
//import styles from './Videos.module.css'
// move below under export default

export default function Videos() {
  const {keyword} = useParams()
  const {
    data: videos,
    isLoading,
    error
  } = useQuery(["videos", keyword], async () => {
    return axios
      .get(`/videos/${keyword ? "search" : "popular"}.json`)
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
  })
  return (
    <div>
      Videos {keyword ? `searched ${keyword}` : `no keyword so hot trend`}
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is Wrong 🥲</p>}
      {videos && (
        <ul>
          {videos.map(video => (
            <VidoeCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  )
}
