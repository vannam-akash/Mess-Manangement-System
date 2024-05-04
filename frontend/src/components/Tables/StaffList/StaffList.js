import React, { useState } from "react";
import  styles from "./StaffList.module.css";

import { Table } from "reactstrap";

const enrolledStudentsList = [
  { fullName: "A.C. Jashwant Rao", phNo: "9112420420" , role:"Manager"},
  { fullName: "Aditya Das", phNo: "9876543214" , role:"Chef"},
  { fullName: "Naman Khetan", phNo: "9876543215", role:"Cook" },
  { fullName: "Pratik Mishra", phNo: "9876543216" , role:"Cook"},
  { fullName: "Vineet Mathur", phNo: "9876543211", role:"staff" },
  { fullName: "Rahul Gupta", phNo: "9876543212" , role:"staff"},
  { fullName: "Pankaj Udas", phNo: "9876543213", role:"staff"},
 

];

const StudentsTable = () => {
  return (
    <>
    
      <div className={styles.TableContainer}>
        
        <Table bordered responsive className={styles.table} >
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Name</th>
              <th>Phone No.</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {enrolledStudentsList?.map((row, index) => (
              <tr key={index}>
                <td>{`${index + 1}`}</td>
                <td>{row.fullName}</td>
                <td>{row.phNo}</td>
                <td>{row.role}</td>
                
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default StudentsTable;

