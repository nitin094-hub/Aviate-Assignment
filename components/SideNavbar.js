import React, { useEffect } from "react";
import styles from "../styles/SideNavbar.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { RiSuitcaseLine } from "react-icons/ri";
import { FiInbox } from "react-icons/fi";
import { useRouter } from "next/router";

function SideNavbar() {
  const router = useRouter();

  return (
    <div className={styles.sideNavbarcontainer}>
      <div
        className={styles.navbarContent}
        style={router.pathname === "/" ? { backgroundColor: "#d3eaff" } : {}}
      >
        <AiOutlineHome size={32} />
        <p>Home</p>
      </div>
      <div className={styles.navbarContent}>
        <FiInbox size={32} />
        <p>Applied</p>
      </div>
      <div className={styles.navbarContent}>
        <BsPerson size={32} />
        <p>Profile</p>
      </div>
      <div className={styles.navbarContent}>
        <RiSuitcaseLine size={32} />
        <p>Job</p>
      </div>
    </div>
  );
}

export default SideNavbar;
