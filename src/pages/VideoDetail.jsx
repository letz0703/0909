import { useState, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import ChannelInfo from "../components/ChannelInfo"
import RelatedVideos from "../components/RelatedVideos"
//import styles from './VideoDetail.module.css'
export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation()
  // IFRAME API : https://bit.ly/3PEAqiG
  // developers.google.com/youtube/iframe_api_reference?hl=ko#:~:text=%3Ciframe%3E%20%ED%83%9C%EA%B7%B8%EB%A5%BC%20%EC%A7%81%EC%A0%91%20%EB%A7%8C%EB%93%A4%20%EC%88%98%20%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4
  const { title, channelId, channelTitle, description } = video.snippet

  return (
    <section className="flex flex-col">
      <article className="basis-4/6">
        <iframe
          title={title}
          id="player"
          type="text/html"
          // width="100%"
          // height="100%"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameborder="0"
          className="video-detail"
        />
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
      <style>{`
      .video-detail {
        display: grid;
        width: 95vw;
        aspect-ratio: 16/9;
        // object-fit: cover;
      }
      `}</style>
    </section>
  )
}
