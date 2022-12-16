import {useState, useEffect, useRef} from 'react';
//import styles from './VidoeCard.module.css'
export default function VidoeCard({video}) {
  const {title, thumbnails, channelTitle, publishedAt} = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{publishedAt}</p>
      </div>
    </li>
  );
}
