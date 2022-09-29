import React from "react";
import styles from "../styles/DashBoardBoxLayout.module.scss";

function DashBoardBoxLayout({ children, heading, subHeading }) {
  return (
    <div className={styles.boxContainer}>
      <h3 className={styles.heading}>{heading}</h3>
      <h5 className={styles.subHeading}>{subHeading}</h5>
      {children}
    </div>
  );
}

export default DashBoardBoxLayout;
