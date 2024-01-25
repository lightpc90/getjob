import React from "react";
import styles from "../../styles/Marquee..module.css"

const MarqueeAnnouncement = ({ children }) => {
  return (
    <div className={styles.marquee}>
      <span>{children}</span>
    </div>
  );
};

export default MarqueeAnnouncement;
