import React from "react";
import styles from "./Sidebar.module.css";
import Avatar from "@mui/material/Avatar";
import SidebarButton from "./SidebarButton";
import { MdSpaceDashboard } from "react-icons/md";
import { FaGripfire } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { IoLibrary } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Avatar
        alt="Remy Sharp"
        src=""
        sx={{ width: 45, height: 45, marginTop: 2 }}
      />
      <div>
        <SidebarButton title="Feed" to="/feed" icons={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icons={<FaGripfire />} />
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
  );
};

export default Sidebar;
