import React, { useEffect, useState } from "react";
import styles from "./Player.module.css";
import { useLocation } from "react-router-dom";
import apiClient from "../spotify/spotify";
import SongCard from "../components/SongCard";
import Queue from "../components/Queue";

const Player = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [index, setIndex] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get(`/playlists/${location.state?.id}/tracks`)
        .then((response) => {
          setTracks(response.data.items);
          setCurrentTrack(response.data.items[0]?.track);
          setLoading(false);
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[index]?.track);
  }, [index, tracks]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftPlayerBody}></div>
      <div className={styles.rightPlayerBody}>
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} index={index} setIndex={setIndex} />
      </div>
    </div>
  );
};

export default Player;
