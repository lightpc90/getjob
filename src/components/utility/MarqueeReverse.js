// components/Marquee.js
import React from "react";
import styles from "../../styles/MarqueeReverse.module.css";

const MarqueeN = ({ children }) => {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeReverse}>
        <span>{children}</span>
        <span>{children}</span>
      </div>
    </div>
  );
};

export default MarqueeN;
