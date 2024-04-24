import { useEffect, useState } from "react";
import apiClient from "../spotify/spotify";
import styles from "./Home.module.css";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [playList, setPlayList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    apiClient.get("me/playlists").then((response) => {
      setPlayList(response.data.items);
      console.log(response.data.items);
    });
  }, []);

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div>
      <div className={styles.libraryBody}>
        {playList?.map((item, index) => {
          return (
            <div
              className={styles.playlistCard}
              key={item.id}
              onClick={() => playPlaylist(item.id)}
            >
              {item.images ? (
                <img
                  src={item?.images[0]?.url}
                  className={styles.playlistImage}
                  alt="Playlist-Art"
                />
              ) : (
                <>
                  <img
                    src="https://www.shutterstock.com/shutterstock/photos/701307613/display_1500/stock-vector-music-notes-song-melody-or-tune-flat-vector-icon-for-musical-apps-and-websites-701307613.jpg"
                    className={styles.playlistImage}
                    alt="Playlist-Art"
                  />
                </>
              )}
              <p className={styles.playlistName}>{item.name}</p>
              <p className={styles.playlistCount}>{item.tracks?.total} songs</p>
              <div className={styles.playlistFade}>
                <IconContext.Provider
                  value={{ size: "40px", color: "#E99D72" }}
                >
                  <AiFillPlayCircle />
                </IconContext.Provider>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
