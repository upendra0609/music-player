import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import Avatar from "@mui/material/Avatar";
import SidebarButton from "./SidebarButton";
import { MdSpaceDashboard } from "react-icons/md";
import { FaGripfire } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { IoLibrary } from "react-icons/io5";
import apiClient from "../../spotify/spotify";

const Sidebar = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiClient
      .get("me")
      .then((response) => {
        setImage(response.data.images[0]?.url);
      })
      .catch((err) => console.log(err.message));

    setLoading(false);
  }, [image]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.container}>
          <div>
            <Avatar
              alt="Remy Sharp"
              src={image}
              sx={{ width: 45, height: 45, marginTop: 2 }}
            />
          </div>
          <div>
            <SidebarButton
              title="Feed"
              to="/feed"
              icons={<MdSpaceDashboard />}
            />
            <SidebarButton
              title="Trending"
              to="/trending"
              icons={<FaGripfire />}
            />
            <SidebarButton
              title="Player"
              to="/player"
              icons={<TbPlayerPlayFilled />}
            />
            <SidebarButton
              title="Favorites"
              to="/favorites"
              icons={<MdFavorite />}
            />
            <SidebarButton title="Library" to="/" icons={<IoLibrary />} />
          </div>
          <div>
            <SidebarButton title="Sign Out" to="" icons={<FaSignOutAlt />} />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
