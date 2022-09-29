import React from "react";
import ApplicationStatusBox from "../components/ApplicationStatusBox";
import SideNavbar from "../components/SideNavbar";
import TopNavbar from "../components/TopNavbar";
import styles from "../styles/Application.module.scss";

function application() {
  return (
    <div>
      <TopNavbar />
      <div className={styles.applicationContainer}>
        <SideNavbar />
        <div className={styles.rightContainer}>
          <h1 className={styles.heading}>Applications</h1>
          <ApplicationStatusBox status="Accepted" />
        </div>
      </div>
    </div>
  );
}

export default application;
