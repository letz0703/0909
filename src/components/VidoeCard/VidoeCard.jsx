import {useState, useEffect, useRef} from "react"
import {useNavigate} from "react-router-dom"
import {formatAgo} from "../../util/date"

// import * as timeago from 'timeago.js';

//import styles from './VidoeCard.module.css'
export default function VidoeCard({video, type}) {
  const {title, thumbnails, channelTitle, publishedAt} = video.snippet
  const navigate = useNavigate()
  const isList = type === "list"

  return (
    <li
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, {state: {video}})
      }}
      className={isList ? "bg-slate-800 ml-1" : ""}
    >
      <img
        src={thumbnails.medium.url}
        alt={title}
        // className="w-full "
      />
      <div>
        <p className="my-2 font-semibold line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt)}</p>
        {/* <p>{formatAgo(publishedAt, 'ko')}</p> */}
      </div>
    </li>
  )
}
