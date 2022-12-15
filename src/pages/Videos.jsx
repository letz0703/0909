import {useQuery} from "@tanstack/react-query"
import {useState, useEffect, useRef} from "react"
import {useParams} from "react-router-dom"
import VidoeCard from "../components/VidoeCard/VidoeCard"
//import styles from './Videos.module.css'
// move below under export default

export default function Videos() {
  const {keyword} = useParams()
  const {
    data: videos,
    isLoading,
    error
  } = useQuery(["videos", keyword], async () => {
    return fetch(`/videos/${keyword ? "search" : "popular"}.json`)
      .then(res => res.json())
      .then(data => data.items)
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
