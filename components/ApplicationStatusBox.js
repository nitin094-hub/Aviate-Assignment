import React, { useState } from "react";
import styles from "../styles/ApplicationStatusBox.module.scss";
import { BsBuilding } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { Select } from "antd";
const { Option } = Select;

function ApplicationStatusBox({ status }) {
  const [isOpened, setIsOpened] = useState(false);
  const arr = [
    "0:00",
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];
  return (
    <div
      className={styles.applicationStatusBox}
      onClick={() => {
        setIsOpened(!isOpened);
      }}
      style={
        isOpened
          ? { height: "25rem" }
          : {
              height: "122px",
            }
      }
    >
      <div style={{ display: "flex", gap: "16px" }}>
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
        <div>
          <AiOutlineRight
            size={26}
            style={
              isOpened
                ? { transform: "rotate(90deg)", transition: "0.3s all" }
                : { transform: "rotate(0deg)", transition: "0.3s all" }
            }
          />
        </div>
      </div>
      <div className={styles.applicationStatusSubBox}>
        <BsCheckCircle size={25} color="green" />
        <div>
          <h2>Application Accepted</h2>
        </div>
      </div>
      <form
        className={styles.interviewScheduleContainer}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>Schedule Interview</h2>
        <input type="date" />
        <Select defaultValue="00:00">
          {arr.map((item, idx) => {
            return (
              <Option value={`${item}`} key={idx}>
                {item}
              </Option>
            );
          })}
        </Select>
        <button>
          <h3>Schedule</h3>
        </button>
      </form>
    </div>
  );
}

export default ApplicationStatusBox;
