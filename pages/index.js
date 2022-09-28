import styles from "../styles/Home.module.scss";
import DashBoardBoxLayout from "./components/DashBoardBoxLayout";
import DashBoxContent from "./components/DashBoxContent";
import SideNavbar from "./components/SideNavbar";
import TopNavbar from "./components/TopNavbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <TopNavbar />
      <div className={styles.subContainer}>
        <SideNavbar />
        <div className={styles.rightContainer}>
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
              role="React.Js Developer"
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
