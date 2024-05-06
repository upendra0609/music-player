import React from "react";
import styles from "./AudioPlayer.module.css";
import ProgressCircle from "./ProgressCircle";

const AudioPlayer = ({ currentTrack }) => {
  console.log("current", currentTrack);
  return (
    <div className={styles.playerBody}>
      <div className={styles.playerLeftBody}>
        <ProgressCircle
          percentage={75}
          isPlaying={true}
          image={currentTrack?.album.images[0]?.url}
          size={300}
          color="#C96850"
        />
      </div>
      <div className={styles.playerRightBody}></div>
    </div>
  );
};

export default AudioPlayer;
