import React from "react";
import styles from "./Controls.module.css";
import { IconContext } from "react-icons";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";

import { FaPause } from "react-icons/fa";

const Controls = ({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
  total,
}) => {
  return (
    <IconContext.Provider value={{ size: "35px", color: "#C4D0E3" }}>
      <div className={styles.controlsWrapper}>
        <div className={styles.actionButton} onClick={() => handlePrev()}>
          <IoPlaySkipBack></IoPlaySkipBack>
        </div>
        <div
          className={
            isPlaying
              ? `${styles.playPauseButton} ${styles.active}`
              : styles.playPauseButton
          }
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <FaPause></FaPause> : <IoPlay></IoPlay>}
        </div>
        <div className={styles.actionButton} onClick={() => handleNext()}>
          <IoPlaySkipForward></IoPlaySkipForward>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Controls;
