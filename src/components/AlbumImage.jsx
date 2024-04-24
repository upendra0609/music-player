import React from "react";
import styles from "./AlbumImage.module.css";
import AlbumInfo from "./AlbumInfo";

const AlbumImage = ({ url, album }) => {
  console.log(url);
  return (
    <div className={styles.albumImage}>
      <img src={url} alt="album art" className={styles.albumArt} />
      <div className={styles.albumImageShadow}>
        <img src={url} alt="shadow" className={styles.albumShadow} />
      </div>
      <AlbumInfo album={album} />
    </div>
  );
};

export default AlbumImage;
