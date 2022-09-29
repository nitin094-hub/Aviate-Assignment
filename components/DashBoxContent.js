import React from "react";
import styles from "../styles/DashBoxContent.module.scss";
import { BsBuilding } from "react-icons/bs";

function DashBoxContent({
  role,
  companyName,
  location,
  stipendRange,
  posted,
  status,
}) {
  return (
    <div className={styles.DashBoxContainer}>
      <div className={styles.leftContainer}>
        <BsBuilding size={30} />
      </div>
      <div className={styles.rightContainer}>
        <h3 className={styles.heading}>{role}</h3>
        <h5 className={styles.subHeading}>{companyName}</h5>
        <h5 className={styles.subHeading}>{location}</h5>
        {!stipendRange && (
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
          </div>
        )}
        <h4 style={{ fontWeight: "100", margin: "0.8rem 0" }}>
          {stipendRange}
        </h4>
        {posted && (
          <p
            style={{ fontSize: "12px", fontWeight: "500", margin: "0" }}
          >{`Posted ${posted} ago`}</p>
        )}
      </div>
    </div>
  );
}

export default DashBoxContent;
