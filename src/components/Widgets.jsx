import React, { useEffect, useState } from "react";
import apiClient from "../spotify/spotify";
import styles from "./Widgets.module.css";
import WidgetCard from "./WidgetCard";

const Widgets = ({ artistId }) => {
  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);

  const id = artistId?.artists[0]?.id;

  useEffect(() => {
    apiClient
      .get(`/artists/${id}/related-artists`)
      .then((response) => {
        const a = response.data?.artists.slice(0, 3);
        setSimilar(a);
      })
      .catch((err) => console.log(err.message));

    apiClient
      .get(`/browse/featured-playlists`)
      .then((response) => {
        const a = response.data?.playlists.items.slice(0, 3);
        setFeatured(a);
      })
      .catch((err) => console.log(err.message));

    apiClient
      .get(`/browse/new-releases`)
      .then((response) => {
        const a = response.data?.albums.items.slice(0, 3);
        setNewRelease(a);
      })
      .catch((err) => console.log(err.message));
  }, [id]);

  return (
    <div className={styles.widgetsBody}>
      <WidgetCard title="Similar Artists" similar={similar} />
      <WidgetCard title="Made For You" featured={featured} />
      <WidgetCard title="New Release" newRelease={newRelease} />
    </div>
  );
};

export default Widgets;
