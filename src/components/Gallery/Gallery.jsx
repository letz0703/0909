import React from "react"
import styles from "./Gallery.module.css"

export function Gallery() {
  return (
    <>
      <div className={`${styles.container}`}>
        <h1>Gallery</h1>
        <div className={`${styles.gallery_wrap}`}>
          <div className={`${styles.item} ${styles.item1}`}></div>
          <div className={`${styles.item} ${styles.item2}`}></div>
          <div className={`${styles.item} ${styles.item3}`}></div>
          <div className={`${styles.item} ${styles.item4}`}></div>
          <div className={`${styles.item} ${styles.item5}`}></div>
        </div>
      </div>
    </>
  )
}
