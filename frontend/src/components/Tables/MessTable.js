import React from "react";
import { Table } from "reactstrap";
import "./MessTable.css";



const MessTable = () => {

  <Table
    bordered
    borderless
    responsive
    size=""
    striped
  ></Table>

  function generateRowsForMonth(daysInMonth) {
    const rows = [];
    const daysOfWeek = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thuday', 'Friday', 'Satday'];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(new Date().getFullYear(), new Date().getMonth(), day);
      const dayOfWeek = daysOfWeek[date.getDay()];

      rows.push(
        <tr key={day}>
          <td>{`${day} (${dayOfWeek})`}</td>
          <td>{true.toString()}</td>
          <td>{true.toString()}</td>
          <td>{true.toString()}</td>
        </tr>
      );
    }
    return rows;
  }

  function getDaysInMonth(month, year) {
    // Ensure month is in valid range (1-12)
    if (month < 1 || month > 12) {
      throw new Error('Invalid month. Month must be between 1 and 12.');
    }

    // Use Date object to get the last day of the month
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    return lastDayOfMonth;
  }

  // Example usage:
  const month = 4; // April (January is 0, February is 1, ..., December is 11)
  const year = 2024;
  const daysInApril2024 = getDaysInMonth(month, year);
  // generateRowsForMonth(daysInApril2024)
  //   console.log(`Number of days in April ${year}: ${daysInApril2024}`);

  return <>
    <div className="TableContainer">
      <Table bordered responsive>
        <thead>
          <tr>
            <th>Date & Day</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
          </tr>
        </thead>
        <tbody>
          {generateRowsForMonth(daysInApril2024)} {/* Change 30 to the actual number of days in the month */}
        </tbody>
      </Table>
    </div>
  </>

}

export default MessTable;

