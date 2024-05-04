import styles from "./EnrolledStudents.module.css";
import { useEffect, useRef } from "react";
import { redirect, useLoaderData } from "react-router-dom";
import StudentsTable from "components/Tables/EnrolledStudentsTable/StudentsTable";
import { checkStaffAuthLoader, getMessId, getUserType } from "auth";
import { getEnrolledStuds } from "api/staff";
import { toast } from "react-toastify";

const EnrolledStudents = () => {
  const mainRef = useRef();
  const enrolledStuds = useLoaderData();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainRef.current.scrollTop = 0;
    toast.info("These are all the enrolled students in this mess.")
  }, []);
  return (
    <>
      <section className="section section-shaped section-lg">
        <div className="shape shape-style-1 bg-gradient-primary">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <main ref={mainRef}>
          <section className="section section-shaped section-lg">
            <div className={styles.title}>Students Enrolled</div>
            <div className={styles.studentList}>
             <StudentsTable studs={enrolledStuds}/>
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default EnrolledStudents;

export async function enrolledStudsLoader() {
  checkStaffAuthLoader();
  const enrolledStuds = await getEnrolledStuds();
  return enrolledStuds;
}
