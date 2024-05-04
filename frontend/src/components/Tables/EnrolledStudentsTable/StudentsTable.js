import React, { useState } from "react";
import  styles from "./StudentsTable.module.css";

import { Table } from "reactstrap";

const StudentsTable = ({studs}) => {
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
            {studs?.map((row, index) => (
              <tr key={index}>
                <td>{`${index + 1}`}</td>
                <td>{row.fullName}</td>
                <td>{row.rollNo}</td>
                <td>{0}</td>
                <td>{0}</td>
                <td>{0}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default StudentsTable;

