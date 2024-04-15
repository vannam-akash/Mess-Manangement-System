import React, { useEffect, useRef } from "react";
import MessTable from "components/Tables/MessTable";
import "../../components/Tables/MessTable.css"
import { useLoaderData} from "react-router-dom";
import { fetchStudentDetails } from "http";

const studentId = process.env.REACT_APP_STUDENTID;

const MessBill = () => {
  const mainRef = useRef();
  const student = useLoaderData();
  console.log(student);

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
          <div >
            <p className="student-info">
              <b>Student Name:</b> {student.fullName}
              <br />
              <b>Roll No.:</b> {student.rollNo}
              <br />
              <b>Month:</b> {"April"}, {"2024"}
            </p>
          </div>
          <MessTable mealTable={student.mealLogs} />
        </section>
      </main>
      </section>
    </>
  );
};

export async function messBillLoader() {
  const stud = fetchStudentDetails(studentId);
  return stud;
}

export default MessBill;
