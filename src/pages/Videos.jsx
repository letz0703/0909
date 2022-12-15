import {useQuery} from "@tanstack/react-query"
import {useState, useEffect, useRef} from "react"
import {useParams} from "react-router-dom"
import FakeYoutube from "../api/fakeYoutube"
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
  } = useQuery(["videos", keyword], () => youtube.search(keyword))

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
