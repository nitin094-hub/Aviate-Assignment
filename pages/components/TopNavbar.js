import React from "react";
import styles from "../../styles/TopNavbar.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";

function TopNavbar() {
  return (
    <div className={styles.topNavbarContainer}>
      <h2 className={styles.heading}>JOB PORTAL</h2>
      <div className={styles.rightContent}>
        <div className={styles.iconContainer}>
          <AiOutlineSearch size={20} />
        </div>
        <div className={styles.iconContainer}>
          <IoMdNotifications size={20} />
        </div>
        <div className={styles.profileDropDown}>
          <div>
            <CgProfile size={35} />
          </div>
          <div>
            <MdArrowDropDown size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
