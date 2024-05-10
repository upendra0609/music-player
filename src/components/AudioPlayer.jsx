import React, { useEffect, useRef, useState } from "react";
import styles from "./AudioPlayer.module.css";
import ProgressCircle from "./ProgressCircle";
import WaveAnimation from "./WaveAnimation";
import Controls from "./Controls";

/**
 * Component that renders the audio player
 * @param {Object} props The props passed to the component
 * @param {Object} props.currentTrack The current track object
 * @param {number} props.currentIndex The index of the current track
 * @param {Function} props.setCurretnIndex Function to set the current index
 * @param {Array} props.total The list of tracks
 */
const AudioPlayer = ({
  currentTrack,
  currentIndex,
  setCurretnIndex,
  total,
}) => {
  console.log(currentTrack);
  const [isPlaying, setIsPlaying] = useState(true);
  const [trackProgress, setTrackProgress] = useState(0);
  const audioSource = total[currentIndex]?.track?.preview_url;

  const audioRef = useRef(new Audio(total[0]?.track?.preview_url));

  const intervalRef = useRef();

  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  /**
   * Starts the timer for the track
   */
  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };

  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
        audioRef?.current?.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (isPlaying) {
        audioRef.current = new Audio(audioSource);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSource);

    setTrackProgress(audioRef.current.currentTime);
    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  /**
   * Handles the next track
   */
  const handleNext = () => {
    if (currentIndex < total.length - 1) {
      setCurretnIndex((prev) => prev + 1);
    } else {
      setCurretnIndex(0);
    }
  };

  /**
   * Handles the previous track
   */
  const handlePrev = () => {
    if (currentIndex !== 0) {
      setCurretnIndex((prev) => prev - 1);
    } else {
      setCurretnIndex(total.length - 1);
    }
  };

  const artists = [];
  currentTrack?.album?.artists.forEach((artist) => {
    artists.push(artist.name);
  });

  /**
   * Converts milliseconds to minutes and seconds
   * @param {number} ms The number of milliseconds
   * @returns {string} The time in minutes and seconds
   */
  const msToMinSec = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };
  console.log("current", currentTrack);
  return (
    <div className={styles.playerBody}>
      <div className={styles.playerLeftBody}>
        <ProgressCircle
          percentage={currentPercentage}
          isPlaying={true}
          image={currentTrack?.album.images[0]?.url}
          size={250}
          color="#C96850"
        />
      </div>
      <div className={styles.playerRightBody}>
        <p className={styles.songTitle}>{currentTrack?.name}</p>
        <p className={styles.songArtist}>{artists.join(", ")}</p>
        <div className={styles.playerRightBottom}>
          <div className={styles.songDuration}>
            <p className={styles.duration}>
              0:
              {Math.round(trackProgress) < 9
                ? "0" + Math.round(trackProgress)
                : Math.round(trackProgress)}
            </p>
            <WaveAnimation isPlaying={isPlaying}></WaveAnimation>
            <p className={styles.duration}>
              {msToMinSec(currentTrack.duration_ms)}
            </p>
          </div>
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total}
          ></Controls>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
