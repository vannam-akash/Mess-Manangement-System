import React, { useState } from "react";
import  styles from "./StudentsTable.module.css";

import { Table } from "reactstrap";

const enrolledStudentsList = [
  { fullName: "Aditya Das", rollNo: "21135003" , extrasAmt:"2000", messAmt:"500000"},
  { fullName: "Naman Khetan", rollNo: "21135086", extrasAmt:"5000", messAmt:"1000000" },
  { fullName: "Aditya Das", rollNo: "21135003" , extrasAmt:"2000", messAmt:"500000"},
  { fullName: "Naman Khetan", rollNo: "21135086", extrasAmt:"5000", messAmt:"1000000" },
  { fullName: "Aditya Das", rollNo: "21135003" , extrasAmt:"2000", messAmt:"500000"},
  { fullName: "Naman Khetan", rollNo: "21135086", extrasAmt:"5000", messAmt:"1000000" },
  { fullName: "Aditya Das", rollNo: "21135003" , extrasAmt:"2000", messAmt:"500000"},
  { fullName: "Naman Khetan", rollNo: "21135086", extrasAmt:"5000", messAmt:"1000000" },
  { fullName: "Aditya Das", rollNo: "21135003" , extrasAmt:"2000", messAmt:"500000"},
  { fullName: "Naman Khetan", rollNo: "21135086", extrasAmt:"5000", messAmt:"2000" },
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
              <th>Roll No.</th>
              <th>Extras Amount</th>
              <th>Mess Amount</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {enrolledStudentsList?.map((row, index) => (
              <tr key={index}>
                <td>{`${index + 1}`}</td>
                <td>{row.rollNo}</td>
                <td>{row.fullName}</td>
                <td>{row.extrasAmt}</td>
                <td>{row.messAmt}</td>
                <td>{parseFloat(row.extrasAmt) + parseFloat(row.messAmt)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default StudentsTable;

