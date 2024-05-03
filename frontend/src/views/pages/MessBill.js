import React, { useEffect, useRef } from "react";
import MessTable from "components/Tables/MessTable";
import "../../components/Tables/MessTable.css"
import { redirect, useLoaderData} from "react-router-dom";
import { fetchStudentDetails } from "http";
import { getId } from "auth";

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
          {!student.messEnrolled && <p className="student-info" >Not enrolled in a mess.</p>}
          {student.messEnrolled && <MessTable mealTable={student.bill} />}
        </section>
      </main>
      </section>
    </>
  );
};

export async function messBillLoader() {
  const studentId = getId();
  if(!studentId) return redirect("/students/login");
  const stud = await fetchStudentDetails(studentId);
  console.log(stud);
  return stud;
}

export default MessBill;
