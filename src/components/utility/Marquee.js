// components/Marquee.js
import React from "react";
import styles from "../../styles/Marquee.module.css"

const Marquee = ({ children }) => {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marquee}>
        <span>{children}</span>
        <span>{children}</span>
      </div>
    </div>
  );
};

export default Marquee;
