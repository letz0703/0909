import {useQuery} from "@tanstack/react-query"
import {useState, useEffect, useRef} from "react"
import {useYoutubeApi} from "../context/YoutubeApi"
//import styles from './ChannelInfo.module.css'
export default function ChannelInfo({id, name}) {
  const {youtube} = useYoutubeApi()
  // move below under export default
  const {data: url} = useQuery(["channel", id], async () =>
    youtube.channelImageURL(id)
  )
  return (
    <div>
      {url && <img src={url} alt={name} />}
      <p>{name}</p>
    </div>
  )
}
