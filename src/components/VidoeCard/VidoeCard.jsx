import {useState, useEffect, useRef} from 'react';
import {formatAgo} from '../../util/date';
// import * as timeago from 'timeago.js';

//import styles from './VidoeCard.module.css'
export default function VidoeCard({video}) {
  const {title, thumbnails, channelTitle, publishedAt} = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt)}</p>
        {/* <p>{formatAgo(publishedAt, 'ko')}</p> */}
      </div>
    </li>
  );
}
