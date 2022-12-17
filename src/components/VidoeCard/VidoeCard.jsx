import {useState, useEffect, useRef} from "react"
import {formatAgo} from "../../util/date"
// import * as timeago from 'timeago.js';

//import styles from './VidoeCard.module.css'
export default function VidoeCard({video}) {
  const {title, thumbnails, channelTitle, publishedAt} = video.snippet
  return (
    <li>
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="w-full aspect-[16/9]"
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
