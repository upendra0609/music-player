import React from "react";
import styles from "./WidgetEntry.module.css";

const WidgetEntry = ({ title, subtitle, image }) => {
  console.log(subtitle);
  return (
    <div className={styles.entryBody}>
      <img src={image} alt="" className={styles.entryImage} />
      <div className={styles.entryRightBody}>
        <p className={styles.entryTitle}>{title}</p>
        <p className={styles.entrySubtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default WidgetEntry;
