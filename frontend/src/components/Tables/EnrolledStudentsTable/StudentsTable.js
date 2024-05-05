import React, { useState } from "react";
import  styles from "./StudentsTable.module.css";

import { Table } from "reactstrap";

const StudentsTable = ({studs, bills}) => {
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
            {studs?.map((row, ind) => (
              <tr key={ind}>
                <td>{`${ind + 1}`}</td>
                <td>{row.fullName}</td>
                <td>{row.rollNo}</td>
                <td>{bills[ind].extrasBill}</td>
                <td>{bills[ind].totalBill}</td>
                <td>{bills[ind].totalBill+bills[ind].extrasBill}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default StudentsTable;

