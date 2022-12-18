import {useQuery} from "@tanstack/react-query"
import {useState, useEffect, useRef} from "react"
import {useParams} from "react-router-dom"
// import FakeYoutube from "../api/fakeYoutube"
import Youtube from "../api/youtube"
import VidoeCard from "../components/VidoeCard/VidoeCard"
import {useYoutubeApi} from "../context/YoutubeApi"
//import styles from './Videos.module.css'

export default function Videos() {
  const {keyword} = useParams()
  const {youtube} = useYoutubeApi()
  const {
    data: videos,
    isLoading,
    error
  } = useQuery(["videos", keyword], () => youtube.search(keyword), {
    staleTime: 1000 * 60 * 5
  })

  return (
    <div>
      {keyword ? `searched ${keyword}` : ``}
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is Wrong 🥲</p>}
      {videos && (
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
         2xl:grid-cols-5 gap-2 gap-y-4"
        >
          {videos.map(video => (
            <VidoeCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  )
}
