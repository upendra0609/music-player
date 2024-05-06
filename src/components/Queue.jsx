import styles from "./Queue.module.css";

const Queue = ({ tracks, index, setIndex }) => {
  console.log(tracks);
  return (
    <div className={styles.container}>
      <div className={styles.queue}>
        <p className={styles.upNext}>Next</p>
        <div className={styles.queueList}>
          {tracks?.map((track, i) => {
            return (
              <div
                className={styles.queueItem}
                key={i}
                onClick={() => setIndex(i)}
              >
                <p className={styles.trackName}>{track?.track?.name}</p>
                <p>
                  {Math.floor(track?.track?.duration_ms / 60000) +
                    ":" +
                    (
                      "0" +
                      Math.floor((track?.track?.duration_ms % 60000) / 1000)
                    ).slice(-2)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Queue;
