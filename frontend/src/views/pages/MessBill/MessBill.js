import styles from "./MessBill.module.css";
import { useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import MessTable from "components/Tables/MessTable/MessTable";
import { checkStudAuthLoader } from "auth";
import { fetchStudentDetails } from "api/student";
import UnenrolledFallback from "components/Divs/UnenrolledFallback/UnenrolledFallback";

const MessBill = () => {
  const mainRef = useRef();
  const student = useLoaderData();

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
          {!student.messEnrolled && <UnenrolledFallback />}
          {student.messEnrolled && (
            <section className="section section-shaped section-lg">
              <div className={styles.title}>Mess Bill</div>
              <div className={styles.details}>
                <div className={styles.name}>Name : {student.fullName}</div>
                <div className={styles.roll}>Roll No : {student.rollNo} </div>
                <div className={styles.hostel}>Hostel : {student.hostel} </div>
              </div>
              <div className={styles.studentList}>
                <MessTable bill={student.bill} />
              </div>
            </section>
          )}
        </main>
      </section>
    </>
  );
};

export default MessBill;

export async function messBillLoader() {
  checkStudAuthLoader();
  const stud = await fetchStudentDetails();
  console.log(stud);
  return stud;
}
