import React, { useState } from "react";
import styles from "./ExtrasTable.module.css";

import { Table } from "reactstrap";

const extrasBill = [
  { date: "03-05-2024", dish: "Paneer Bhurji", price: "20", quantity: "1" },
  { date: "03-05-2024", dish: "Egg Rice", price: "20", quantity: "2" },
  { date: "03-05-2024", dish: "Paneer Rice", price: "20", quantity: "4" },
  { date: "03-05-2024", dish: "Paneer Bhurji", price: "20", quantity: "2" },
  { date: "03-05-2024", dish: "Egg Rice", price: "80", quantity: "12" },
  { date: "03-05-2024", dish: "Paneer Rice", price: "20", quantity: "4" },
  { date: "03-05-2024", dish: "Paneer Bhurji", price: "20", quantity: "1" },
  { date: "03-05-2024", dish: "Egg Rice", price: "20", quantity: "3" },
  { date: "03-05-2024", dish: "Paneer Rice", price: "20", quantity: "4" },
  { date: "03-05-2024", dish: "Paneer Bhurji", price: "20", quantity: "1" },
  { date: "03-05-2024", dish: "Egg Rice", price: "20", quantity: "2" },
  { date: "03-05-2024", dish: "Paneer Rice", price: "20", quantity: "9" },
  { date: "03-05-2024", dish: "Paneer Bhurji", price: "20", quantity: "1" },
  { date: "03-05-2024", dish: "Egg Rice", price: "20", quantity: "8" },
  { date: "03-05-2024", dish: "Paneer Rice", price: "20", quantity: "4" },
];

function formatDate(str) {
  let date = new Date(str);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDay = String(day).padStart(2, '0');
  const formattedMonth = String(month).padStart(2, '0');

  return `${formattedDay}/${formattedMonth}/${year}`;
}

const ExtrasTable = ({ extras }) => {
  const calculateTotal = () => {
    let total = 0;
    extras?.map((extra) => {
      total += parseFloat(extra.price) * parseFloat(extra.quantity);
    });
    // console.log(total);
    return total;
  };

  return (
    <>
      <div className={styles.TableContainer}>
        <Table bordered responsive className={styles.table}>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Date</th>
              <th>Dish Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Order Price</th>
            </tr>
          </thead>
          <tbody>
            {extras?.map((extra, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{formatDate(extra.date)}</td>
                <td>{extra.dish}</td>
                <td>{extra.price}</td>
                <td>{extra.quantity}</td>
                <td>{parseFloat(extra.price) * parseFloat(extra.quantity)}</td>
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

export default ExtrasTable;
