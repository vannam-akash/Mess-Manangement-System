import React, { useEffect, useRef } from "react";
import DemoNavbar from "components/Navbars/DemoNavbar";
import SimpleFooter from "components/Footers/SimpleFooter";
import MessTable from "components/Tables/MessTable";
import "../../components/Tables/MessTable.css"

const MessBill = () => {
  const mainRef = useRef();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainRef.current.scrollTop = 0;
  }, []);

  // Sample student data
  const studentData = {
    name: "BKL Akash Vannam",
    rollNo: "21135011",
    month: "April",
    year: "2024",
  };

  return (
    <>

      <DemoNavbar />
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
              <b>Student Name:</b> {studentData.name}
              <br />
              <b>Roll No.:</b> {studentData.rollNo}
              <br />
              <b>Month:</b> {studentData.month},
              {/* <br /> */}
              {studentData.year}
            </p>
          </div>
          <MessTable />
        </section>
      </main>
      </section>
      <SimpleFooter />
    </>
  );
};

export default MessBill;
