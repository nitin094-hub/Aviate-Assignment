import styles from "../styles/Home.module.scss";
import DashBoardBoxLayout from "./components/DashBoardBoxLayout";
import DashBoxContent from "./components/DashBoxContent";
import SideNavbar from "./components/SideNavbar";
import TopNavbar from "./components/TopNavbar";
import { BsPerson } from "react-icons/bs";
import Image from "next/image";
import profile from "../assets/man.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <TopNavbar />
      <div className={styles.subContainer}>
        <SideNavbar />
        <div className={styles.rightContainer}>
          <DashBoardBoxLayout>
            <div className={styles.profileDetailContainer}>
              <div className={styles.profilePic}>
                <Image
                  src={profile}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
              <div className={styles.profileDetails}>
                <h2>Nitin Rajesh</h2>
                <h5>Frontend Developer at XXXXX company</h5>
                <p>India</p>
              </div>
            </div>
          </DashBoardBoxLayout>
          <DashBoardBoxLayout
            heading="Recommended Jobs"
            subHeading={
              "Jobs where you're a top applicant based on your profile job search"
            }
          >
            <DashBoxContent
              role="React.Js Developer"
              companyName="XXXXX"
              location="Remote"
              stipendRange="₹2000-₹10000"
              posted="3days"
            />
            <DashBoxContent
              role="Frontend Intern"
              companyName="XXXXX"
              location="Remote"
              stipendRange="₹2000-₹10000"
              posted="3days"
            />
          </DashBoardBoxLayout>
          <DashBoardBoxLayout heading="Recently Applied Jobs">
            <DashBoxContent
              role="React.Js Developer"
              companyName="XXXXX"
              location="Remote"
              status="Pending"
            />
          </DashBoardBoxLayout>
        </div>
      </div>
    </div>
  );
}
