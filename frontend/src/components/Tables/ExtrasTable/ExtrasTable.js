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

const ExtrasTable = () => {
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
            {extrasBill?.map((row, index) => (
              <tr key={index}>
                <td>{`${index + 1}`}</td>
                <td>{row.date}</td>
                <td>{row.dish}</td>
                <td>{row.price}</td>
                <td>{row.quantity}</td>
                <td>{parseFloat(row.price) * parseFloat(row.quantity)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ExtrasTable;
