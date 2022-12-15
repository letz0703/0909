import {useState, useEffect, useRef} from "react"
//import styles from './VidoeCard.module.css'
export default function VidoeCard({video}) {
  return <div>{video.snippet.title}</div>
}
