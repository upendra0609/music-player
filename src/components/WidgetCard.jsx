import React from "react";
import styles from "./WidgetCard.module.css";
import WidgetEntry from "./WidgetEntry";
import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";

const WidgetCard = ({ title, similar, newRelease, featured }) => {
  console.log(similar);
  console.log(featured);
  console.log(newRelease);
  return (
    <div className={styles.widgetCardBody}>
      <p className={styles.title}>{title}</p>
      {similar
        ? similar.map((item) => (
            <WidgetEntry
              key={item?.name}
              title={item?.name}
              subtitle={item?.followers?.total + " followers"}
              image={item?.images[0]?.url}
            ></WidgetEntry>
          ))
        : featured
        ? featured.map((item) => (
            <WidgetEntry
              key={item?.name}
              title={item?.name}
              subtitle={item?.tracks?.total + " songs"}
              image={item?.images[0]?.url}
            />
          ))
        : newRelease
        ? newRelease.map((item) => (
            <WidgetEntry
              key={item?.name}
              title={item?.name}
              subtitle={item?.artists[0]?.name}
              image={item?.images[0]?.url}
            />
          ))
        : null}
      <div className={styles.widgetFade}>
        <div className={styles.fadeButton}>
          <IconContext.Provider value={{ size: "24px", color: "#C4D0E3" }}>
            <FiChevronRight></FiChevronRight>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default WidgetCard;
