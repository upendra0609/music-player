import styles from "./WaveAnimation.module.css";

const WaveAnimation = ({ isPlaying }) => {
  const waveClass = isPlaying ? `${styles.box} ${styles.active}` : styles.box;
  return (
    <div className={styles.boxContainer}>
      <div className={`${styles.box2} ${waveClass}`}></div>
      <div className={`${styles.box1} ${waveClass}`}></div>
      <div className={`${styles.box3} ${waveClass}`}></div>
      <div className={`${styles.box4} ${waveClass}`}></div>
      <div className={`${styles.box5} ${waveClass}`}></div>
      <div className={`${styles.box6} ${waveClass}`}></div>
      <div className={`${styles.box7} ${waveClass}`}></div>
      <div className={`${styles.box2} ${waveClass}`}></div>
      <div className={`${styles.box3} ${waveClass}`}></div>
      <div className={`${styles.box4} ${waveClass}`}></div>
      <div className={`${styles.box5} ${waveClass}`}></div>
      <div className={`${styles.box6} ${waveClass}`}></div>
      <div className={`${styles.box7} ${waveClass}`}></div>
    </div>
  );
};

export default WaveAnimation;
