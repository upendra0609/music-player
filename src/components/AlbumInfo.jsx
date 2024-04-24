import React from "react";
import styles from "./AlbumInfo.module.css";

const AlbumInfo = ({ album }) => {
  console.log(album);

  return (
    <div className={styles.albumInfoCard}>
      <div className={styles.albumContainer}>
        <div className={styles.marquee}>
          <p>{album?.name + " - " + album?.artists[0]?.name}</p>
        </div>
      </div>
      <div className={styles.albumInfo}>
        <p>{`${album?.name} is an ${album?.album_type} by ${album?.artists[0]?.name} with ${album?.total_tracks} tracks`}</p>
      </div>
      <div className={styles.albumRelease}>
        <p>Release Date: {album?.release_date}</p>
      </div>
    </div>
  );
};

export default AlbumInfo;
