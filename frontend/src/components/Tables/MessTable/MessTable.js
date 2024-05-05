import React, { useState } from "react";
import styles from "./MessTable.module.css";

import { Table } from "reactstrap";

const messBill = [
  [2, 1, 0, 1],
  [3, 1, 0, 1],
  [4, 1, 0, 0],
  [5, 0, 1, 1],
  [6, 1, 1, -1],
  [7, 0, 1, 1],
  [1, 1, 1, 1],
  [2, 1, 0, 1],
  [3, 1, 0, 1],
  [4, 1, 0, 0],
  [5, 0, 1, 1],
  [6, 1, 1, -1],
  [7, 0, 1, 1],
  [1, 1, 1, 1],
  [2, 1, 0, 1],
  [3, 1, 0, 1],
  [4, 1, 0, 0],
  [5, 0, 1, 1],
  [6, 1, 1, -1],
  [7, 0, 1, 1],
  [1, 1, 1, 1],
  [2, 1, 0, 1],
  [3, 1, 0, 1],
  [4, 1, 0, 0],
  [5, 0, 1, 1],
  [6, 1, 1, -1],
  [7, 0, 1, 1],
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MessTable = ({bill}) => {
  console.log(bill);
  const calculateTotal = () => {
    let total = 0;
    bill.mealLogs.map((row) => {
      total += row[1] * (bill.price.breakfast) + row[2] * (bill.price.lunch) + (row[3] === 1 ? 1 : 0) * (bill.price.dinner);
    });
    return total.toFixed(2);
  };

  return (
    <>
      <div className={styles.TableContainer}>
        <Table bordered responsive className={styles.table}>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Date & Day</th>
              <th>Breakfast @{bill.price.breakfast}</th>
              <th>Lunch @{bill.price.lunch}</th>
              <th>Dinner @{bill.price.dinner}</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {bill.mealLogs?.map((row, index) => (
              <tr key={index}>
                <td>{`${index + 1}`}</td>
                {/* Have to write the date in this column as well */}
                <td>{days[row[0] % 7]}</td>
                <td className={row[1] ? styles.yes : styles.no}>
                  {row[1] ? "Yes" : "No"}
                </td>
                <td className={row[2] ? styles.yes : styles.no}>
                  {row[2] ? "Yes" : "No"}
                </td>
                <td
                  className={
                    row[3] === 1
                      ? styles.yes
                      : row[3] === 0
                      ? styles.no
                      : styles.closed
                  }
                >
                  {row[3] === 1 ? "Yes" : row[3] === 0 ? "No" : ""}
                </td>

                <td>
                  {(
                    row[1] * 22.85 +
                    row[2] * 45.71 +
                    (row[3] === 1 ? 1 : 0) * 45.71
                  ).toFixed(2)}
                </td>
              </tr>
            ))}
            <tr className={styles.totalRow}>
              <td colSpan="5">Grand Total</td>
              <td>{calculateTotal()}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default MessTable;
