import {useQuery} from "@tanstack/react-query"
import {useState, useEffect} from "react"
import {v4 as uuidv4} from "uuid"
import {useYoutubeApi} from "../context/YoutubeApi"
import VidoeCard from "./VidoeCard/VidoeCard"
//import styles from './RelatedVideos.module.css'

export default function RelatedVideos({id}) {
  const {youtube} = useYoutubeApi()
  const {
    data: videos,
    isLoading,
    error
  } = useQuery(["related", id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5
  })
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
         2xl:grid-cols-5 gap-2 gap-y-4"
        >
          {videos.map(video => (
            <VidoeCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </>
  )
}
