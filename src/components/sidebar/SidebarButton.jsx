import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Styles from "./SidebarButton.module.css";
import { IconContext } from "react-icons";

const SidebarButton = (props) => {
  let location = useLocation();

  const isActive = location.pathname === props.to;

  const btnClass = isActive
    ? `${Styles.btnBody} ${Styles.activeBtn}`
    : Styles.btnBody;

  return (
    <Link to={props.to}>
      <div className={btnClass}>
        <IconContext.Provider
          value={{ size: "24px", className: Styles.btnIcon }}
        >
          {props.icons}
          <p className={Styles.btnTitle}>{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
};

export default SidebarButton;
