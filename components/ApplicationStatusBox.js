import React from "react";
import styles from "../styles/ApplicationStatusBox.module.scss";
import { BsBuilding } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

function ApplicationStatusBox({ status }) {
  return (
    <div className={styles.applicationStatusBox}>
      <div className={styles.leftContainer}>
        <BsBuilding size={30} />
      </div>
      <div className={styles.rightContainer}>
        <h2 className={styles.heading}>Aviate</h2>
        <h4 className={styles.subHeading}>React JS Internship </h4>
        <div className={styles.status}>
          <div
            className={styles.statusSignal}
            style={
              status === "Pending"
                ? { backgroundColor: "yellow" }
                : { backgroundColor: "green" }
            }
          ></div>
          <h3>{status}</h3>
          <p style={{ color: "grey" }}>SEP 13</p>
        </div>
      </div>
      <AiOutlineRight size={26} />
    </div>
  );
}

export default ApplicationStatusBox;
