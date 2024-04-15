import React from "react";
import { Table } from "reactstrap";
import "./MessTable.css";

const MessTable = ({ mealTable }) => {
  console.log(mealTable);

  return (
    <>
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
            {mealTable.map((row, index) => (
              <tr key={index}>
                <td>{`${index + 1}`}</td>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default MessTable;
