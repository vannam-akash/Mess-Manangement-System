import styles from "./EnrolledStudents.module.css";
import { useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import StudentsTable from "components/Tables/EnrolledStudentsTable/StudentsTable";
import { checkStaffAuthLoader} from "auth";
import { getEnrolledStuds } from "api/staff";
import { getStudsBill } from "api/student";

const EnrolledStudents = () => {
  const mainRef = useRef();
  const {enrolledStuds, bills} = useLoaderData();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainRef.current.scrollTop = 0;
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
             <StudentsTable studs={enrolledStuds} bills={bills}/>
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
  const bills = await getStudsBill(enrolledStuds);
  console.log(bills);
  return {enrolledStuds, bills};
}
