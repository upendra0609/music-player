import AlbumImage from "./AlbumImage";
import AlbumInfo from "./AlbumInfo";
import styles from "./SongCard.module.css";

const SongCard = ({ album }) => {
  console.log(album);
  return (
    <div className={styles.body}>
      <AlbumImage url={album?.images[0]?.url} album={album} />
      {/* <AlbumInfo album={album} /> */}
    </div>
  );
};

export default SongCard;
